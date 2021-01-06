const { Octokit } = require('@octokit/core')
const { throttling } = require("@octokit/plugin-throttling")
const { retry } = require("@octokit/plugin-retry")
const path = require('path')
const slugify = require('slugify')

const generateUploadFileName = (basePath, file) => {
  const extension = file.ext.toLowerCase()
  const fileName = slugify(path.basename(file.hash))
  return `${basePath}${fileName}${extension}`
}

const MyOctokit = Octokit.plugin(throttling).plugin(retry)

module.exports = {
  init(providerOptions) {
    const octokit = new MyOctokit({
      auth: providerOptions.personalAccessToken,
      request: { retries: 10 },
      throttle: {
        onRateLimit: (retryAfter, options, octokit) => {
          console.log(
            `Request quota exhausted for request ${options.method} ${options.url}`
          )

          console.log('retrying')
          return true
        },
        onAbuseLimit: (retryAfter, options, octokit) => {
          console.log(
            `Abuse detected for request ${options.method} ${options.url}`
          )

          return true
        }
      }
    })

    const owner = providerOptions.repoOwner
    const repo = providerOptions.repoName

    return {
      async upload(file) {
        const filePath = generateUploadFileName('content/', file)

        const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
          owner,
          repo,
          path: filePath,
          message: `Add ${filePath}`,
          content: file.buffer.toString('base64')
        })

        file.url = response.data.content.download_url
      },
      delete(file) {

      },
    }
  }
}

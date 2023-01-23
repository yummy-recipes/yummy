'use strict'

const { Octokit } = require('@octokit/core')
const { throttling } = require('@octokit/plugin-throttling')
const { retry } = require('@octokit/plugin-retry')
const debounce = require('debounce')

const MyOctokit = Octokit.plugin(throttling).plugin(retry)

const octokit = new MyOctokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  request: { retries: 10 },
  throttle: {
    onRateLimit: (retryAfter, options, octokit) => {
      console.log(
        `Request quota exhausted for request ${options.method} ${options.url}`,
      )

      return true
    },
    onAbuseLimit: (retryAfter, options, octokit) => {
      console.log(`Abuse detected for request ${options.method} ${options.url}`)

      return true
    },
  },
})

const fiveMinutes = 5 * 60 * 1000

const triggerDeploy = debounce(
  () => {
    octokit.request('POST /repos/{owner}/{repo}/dispatches', {
      owner: 'yummy-recipes',
      repo: 'yummy',
      event_type: 'deploy_blog',
    })
  },
  fiveMinutes,
  true,
)

module.exports = {
  async run(ctx, next) {
    triggerDeploy()
    ctx.send({ ok: true })
  },
}

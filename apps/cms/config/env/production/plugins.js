module.exports = ({ env }) => ({
  upload: {
    provider: 'github',
    providerOptions: {
      repoOwner: 'yummy-recipes',
      repoName: 'assets',
      personalAccessToken: env('GITHUB_PERSONAL_ACCESS_TOKEN')
    },
  },
})

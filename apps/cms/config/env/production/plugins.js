module.exports = ({ env }) => ({
  upload: {
    enabled: true,
    config: {
      provider: 'github',
      providerOptions: {
        repoOwner: 'yummy-recipes',
        repoName: 'assets',
        personalAccessToken: env('GITHUB_PERSONAL_ACCESS_TOKEN'),
      },
    },
  },
})

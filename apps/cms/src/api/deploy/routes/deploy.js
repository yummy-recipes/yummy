module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/deploy',
      handler: 'deploy.run',
      config: { policies: ['withDeployKey'] },
    },
  ],
}

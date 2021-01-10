module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9dc18e1a9ded255ebbd144f5bb02762c'),
    },
  },
  webhooks: {
    defaultHeaders: {
      'x-token': env('DEPLOY_HOOK_TOKEN', 'sudo'),
    },
  }
});

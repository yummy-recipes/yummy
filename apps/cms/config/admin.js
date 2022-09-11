module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9dc18e1a9ded255ebbd144f5bb02762c'),
  },
  apiToken: {
    salt: env('ADMIN_API_TOKEN_SALT', '9dc18e1a9ded255ebbd144f5bb02762c'),
  },
})

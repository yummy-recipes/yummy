module.exports = async (ctx, next) => {
  const token = ctx.request.header['x-token']
  if (token === process.env.DEPLOY_HOOK_TOKEN) {
    return await next()
  }

  ctx.unauthorized(`You're not allowed to perform this action!`)
}

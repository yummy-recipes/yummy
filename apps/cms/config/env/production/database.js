const { parse } = require('pg-connection-string')

module.exports = ({ env }) => {
  const config = parse(env('DATABASE_CONNECTION_STRING'))

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        pool: {
          min: 1,
          max: 5,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  }
}

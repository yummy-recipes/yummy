let strapiAdminNodeModules = require('fs').realpathSync('node_modules/strapi-admin')
strapiAdminNodeModules = require('path').resolve(strapiAdminNodeModules, '..')

let strapiNodeModules = require('fs').realpathSync('node_modules/strapi')
strapiNodeModules = require('path').resolve(strapiNodeModules, '..')

let strapiContentManagerNodeModules = require('fs').realpathSync('node_modules/strapi-plugin-content-manager')
strapiContentManagerNodeModules = require('path').resolve(strapiContentManagerNodeModules, '..')


let strapiUploadNodeModules = require('fs').realpathSync('node_modules/strapi-plugin-upload')
strapiUploadNodeModules = require('path').resolve(strapiUploadNodeModules, '..')

module.exports = {
  webpack: (config, webpack) => {
    config.resolve.symlinks = true

    config.resolveLoader = {
      modules: [
        strapiAdminNodeModules,
        'node_modules'
      ]
    }

    config.resolve.modules = [
      strapiAdminNodeModules,
      strapiContentManagerNodeModules,
      strapiUploadNodeModules,
      strapiNodeModules,
      'node_modules'
     ]

     return config
  },
};

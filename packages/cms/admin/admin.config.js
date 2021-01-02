const path = require('path')

module.exports = {
  webpack: (config, webpack) => {
   config.resolve.modules = [
      path.resolve(__dirname, '../../../node_modules'),
      path.resolve(__dirname, '../../../node_modules/strapi-admin/node_modules'),
      path.resolve(__dirname, '../../../node_modules/strapi-plugin-content-manager/node_modules'),
      'node_modules'
    ]

    return config;
  },
};

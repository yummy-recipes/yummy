'use strict'

const { createCoreService } = require('@strapi/strapi').factories

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = createCoreService('api::category.category')

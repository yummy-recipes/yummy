'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify')

module.exports = {
  beforeCreate: async (event) => {
    const { data } = event.params
    if (data.title) {
      data.slug = data.slug || slugify(data.title).toLowerCase()
    }
  },
  beforeUpdate: async (event) => {
    const { data } = event.params
    if (data.title) {
      data.slug = data.slug || slugify(data.title).toLowerCase()
    }
  },
}

const path = require('path')
const {createPaginated} = require('./common')

function createMainPage({ actions, graphql }) {
  return graphql(`
    {
      allStrapiRecipe {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginated({
      actions,
      collection: result.data.allStrapiRecipe.edges,
      baseUrl: '/',
      component: path.resolve('./src/templates/post-list.js')
    })
  })
}

module.exports = {
  createMainPage
}

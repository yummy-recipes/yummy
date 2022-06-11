const path = require('path')
const { createPaginated } = require('./common')

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

      allRecipeCategory(sort: { fields: [position] }) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginated({
      actions,
      collection: result.data.allStrapiRecipe.edges,
      baseUrl: '/',
      component: path.resolve('./src/templates/post-list.js'),
      context: {
        allCategories: result.data.allRecipeCategory.edges.map(
          ({ node }) => node,
        ),
      },
    })
  })
}

module.exports = {
  createMainPage,
}

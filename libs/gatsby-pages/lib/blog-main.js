const path = require('path')
const { createPaginated } = require('./common')

function createMainBlogPage({ actions, graphql }) {
  return graphql(`
    {
      allStrapiArticle {
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
      collection: result.data.allStrapiArticle.edges,
      baseUrl: '/blog/',
      component: path.resolve('./src/templates/blog-post-list.jsx'),
      context: {
        fullHeaderVersion: false,
        subsection: 'Kulinarne dygresje',
        allCategories: result.data.allRecipeCategory.edges.map(
          ({ node }) => node,
        ),
      },
    })
  })
}

module.exports = {
  createMainBlogPage,
}

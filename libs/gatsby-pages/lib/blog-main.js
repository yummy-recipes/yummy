const path = require('path')
const {createPaginated} = require('./common')

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
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginated({
      actions,
      collection: result.data.allStrapiArticle.edges,
      baseUrl: '/blog/',
      component: path.resolve('./src/templates/blog-post-list.js'),
      context: {
        fullHeaderVersion: false,
        subsection: 'Kulinarne dygresje'
      }
    })
  })
}

module.exports = {
  createMainBlogPage
}

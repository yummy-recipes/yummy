const fs = require('fs')

const createSearchDataJson = ({ graphql }) => {
  return graphql(`
    {
      allStrapiRecipe {
        edges {
          node {
            slug
            category {
              slug
            }
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pages = result.data.allStrapiRecipe.edges.map(({node}) => {
      return {
        path: `/${node.category.slug}/${node.slug}`,
        title: node.title
      }
    })

    fs.writeFileSync('./data.json', JSON.stringify({ pages }))
  })
}

exports.createPages = ({ graphql }) => {
  return createSearchDataJson({ graphql })
}

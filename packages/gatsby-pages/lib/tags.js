const path = require('path')
const {createPaginated} = require('./common')

async function createTagPages({ actions, graphql }) {
  const result = await graphql(`
    {
      allStrapiTag {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const tags = result.data.allStrapiTag.edges.map(tag => tag.node)

  return Promise.all(tags.map(({ name, slug }) => createTagPage({ tag: name, tagSlug: slug, actions, graphql })))
}

async function createTagPage({ tag, tagSlug, actions, graphql }) {
  const result = await graphql(`
    query ($tag: String!) {
      allStrapiRecipe(
        filter: { tags: { elemMatch: { slug: { in: [$tag] } } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `, {tag: tagSlug})

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  createPaginated({
    actions,
    collection: result.data.allStrapiRecipe.edges,
    component: path.resolve('./src/templates/post-list-by-tag.js'),
    baseUrl: `/tag/${tagSlug}/`,
    context: {
      slug: tagSlug,
      tag: tag,
      fullHeaderVersion: false,
      subsection: tag
    }
  })
}

module.exports = {
  createTagPages
}

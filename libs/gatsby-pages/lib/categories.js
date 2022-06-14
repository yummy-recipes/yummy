const path = require('path')
const { createPaginated } = require('./common')

async function createCategoryPages({ actions, graphql }) {
  const result = await graphql(`
    {
      allStrapiCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const categories = result.data.allStrapiCategory.edges.map(
    (category) => category.node,
  )

  return Promise.all(
    categories.map((category) =>
      createCategoryPage({
        category: category.name,
        slug: category.slug,
        actions,
        graphql,
      }),
    ),
  )
}

async function createCategoryPage({ category, slug, actions, graphql }) {
  const result = await graphql(
    `
      query ($slug: String!) {
        allStrapiRecipe(filter: { category: { slug: { eq: $slug } } }) {
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
    `,
    { slug },
  )

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  createPaginated({
    actions,
    collection: result.data.allStrapiRecipe.edges,
    component: path.resolve('./src/templates/post-list-by-category.jsx'),
    baseUrl: `/${slug}/`,
    context: {
      slug: slug,
      category: category,
      fullHeaderVersion: false,
      subsection: category,
      allCategories: result.data.allRecipeCategory.edges.map(
        ({ node }) => node,
      ),
    },
  })
}

module.exports = {
  createCategoryPages,
}

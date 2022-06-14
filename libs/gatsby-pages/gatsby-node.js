const path = require('path')

const { createTagPages } = require('./lib/tags')
const { createCategoryPages } = require('./lib/categories')
const { createMainPage } = require('./lib/main')
const { createMainBlogPage } = require('./lib/blog-main')

exports.createPages = ({ actions, graphql }) => {
  return Promise.resolve()
    .then(() => createError404Page({ actions, graphql }))
    .then(() => createMainPage({ actions, graphql }))
    .then(() => createRecipePages({ actions, graphql }))
    .then(() => createTagPages({ actions, graphql }))
    .then(() => createCategoryPages({ actions, graphql }))
    .then(() => createBlogPostPages({ actions, graphql }))
    .then(() => createMainBlogPage({ actions, graphql }))
}

async function createError404Page({ actions, graphql }) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allRecipeCategory(sort: { fields: [position] }) {
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

  createPage({
    path: '/404.html',
    component: path.resolve('./src/templates/error-404.jsx'),
    context: {
      fullHeaderVersion: false,
      allCategories: result.data.allRecipeCategory.edges.map(
        ({ node }) => node,
      ),
    },
  })
}

async function createBlogPostPages({ actions, graphql }) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiArticle(sort: { order: DESC, fields: [published_at] }) {
        edges {
          node {
            title
            published_at
            slug
            headline
            content
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
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const posts = result.data.allStrapiArticle.edges
  const component = path.resolve('./src/templates/blog-post-page/index.jsx')

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component,
      context: {
        slug: node.slug,
        fullHeaderVersion: false,
        isSingleRecipe: true,
        allCategories: result.data.allRecipeCategory.edges.map(
          ({ node }) => node,
        ),
      },
    })
  })
}

async function createRecipePages({ actions, graphql }) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiRecipe(sort: { order: DESC, fields: [published_at] }) {
        edges {
          node {
            slug

            category {
              slug
            }
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
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const collection = result.data.allStrapiRecipe.edges
  const component = path.resolve('./src/templates/post-page/index.jsx')

  collection.forEach(({ node }) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component,
      context: {
        slug: node.slug,
        fullHeaderVersion: false,
        isSingleRecipe: true,
        allCategories: result.data.allRecipeCategory.edges.map(
          ({ node }) => node,
        ),
        // TODO: fix gallery
        absolutePathRegex: null,
      },
    })
  })
}

const path = require('path')

const { createTagPages } = require('./lib/tags')
const { createCategoryPages } = require('./lib/categories')
const { createMainPage } = require('./lib/main')
const { createMainBlogPage } = require('./lib/blog-main')

exports.createPages = ({ actions, graphql }) => {
  return Promise.resolve()
    .then(() => createError404Page({ actions }))
    .then(() => createMainPage({ actions, graphql }))
    .then(() => createRecipePages({ actions, graphql }))
    .then(() => createTagPages({ actions, graphql }))
    .then(() => createCategoryPages({ actions, graphql }))
    .then(() => createBlogPostPages({ actions, graphql }))
    .then(() => createMainBlogPage({ actions, graphql}))
}

async function createError404Page({ actions }) {
  const { createPage } = actions

  createPage({
    path: '/404.html',
    component: path.resolve('./src/templates/error-404.js'),
    context: {
      fullHeaderVersion: false
    }
  })
}

async function createBlogPostPages({ actions, graphql}) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiArticle(
        sort: { order: DESC, fields: [published_at] }
      ) {
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
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const posts = result.data.allStrapiArticle.edges
  const component = path.resolve('./src/templates/blog-post-page/index.js')

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component,
      context: {
        slug: node.slug,
        fullHeaderVersion: false,
        isSingleRecipe: true
      }
    })
  })
}

async function createRecipePages({ actions, graphql }) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiRecipe(
        sort: { order: DESC, fields: [published_at] }
      ) {
        edges {
          node {
            slug
            
            category {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const collection = result.data.allStrapiRecipe.edges
  const component = path.resolve('./src/templates/post-page/index.js')

  collection.forEach(({ node }) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component,
      context: {
        slug: node.slug,
        fullHeaderVersion: false,
        isSingleRecipe: true,
        // TODO: fix gallery
        absolutePathRegex: null
      }
    })
  })
}

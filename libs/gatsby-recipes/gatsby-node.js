const crypto = require('crypto')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createResolvers = ({
  createResolvers,
  createNodeId,
  cache,
  actions,
  store,
  reporter,
}) => {
  const { createNode } = actions
  const apiUrl = process.env.API_URL || 'http://localhost:1337'
  const resolvers = {
    STRAPI__MEDIA: {
      image: {
        type: 'File',
        resolve: (source, args, context, info) => {
          return createRemoteFileNode({
            url: source.url.startsWith('/')
              ? `${apiUrl}${source.url}`
              : source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
    STRAPI_RECIPE: {
      parsedHeadline: {
        type: 'RecipePart',
        resolve: (source, args, context, info) => {
          const id = createNodeId(`Headline >>> ${source.id} >>> RecipePart`)
          return context.nodeModel.getNodeById({ id, type: 'RecipePart' })
        },
      },
      parsedIngredients: {
        type: 'RecipePart',
        resolve: (source, args, context, info) => {
          const id = createNodeId(`Ingredients >>> ${source.id} >>> RecipePart`)
          return context.nodeModel.getNodeById({ id, type: 'RecipePart' })
        },
      },
      parsedDirections: {
        type: 'RecipePart',
        resolve: (source, args, context, info) => {
          const id = createNodeId(`Directions >>> ${source.id} >>> RecipePart`)
          return context.nodeModel.getNodeById({ id, type: 'RecipePart' })
        },
      },
    },
  }
  createResolvers(resolvers)
}

exports.onCreateNode = async ({ node, createNodeId, actions }) => {
  if (node.internal.type !== 'STRAPI_RECIPE') {
    return
  }

  const { createNode } = actions

  createRecipePart(node, 'Headline', node.headline, {
    createNode,
    createNodeId,
  })
  createRecipePart(node, 'Ingredients', node.ingredients.data || '', {
    createNode,
    createNodeId,
  })
  createRecipePart(node, 'Directions', node.directions.data || '', {
    createNode,
    createNodeId,
  })
}

function createRecipePart(parent, kind, content, { createNodeId, createNode }) {
  const id = createNodeId(`${kind} >>> ${parent.id} >>> RecipePart`)
  const node = {
    id: id,
    children: [],
    parent: parent.id,
    internal: {
      content: content,
      type: 'RecipePart',
      mediaType: 'text/markdown',
    },
  }

  node.internal.contentDigest = crypto
    .createHash('md5')
    .update(content)
    .digest('hex')

  createNode(node)
  return node
}

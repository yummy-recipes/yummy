const crypto = require('crypto')

exports.createResolvers = ({ createResolvers, createNodeId }) => {
  const resolvers = {
    StrapiArticle: {
      parsedHeadline: {
        type: 'RecipePart',
        resolve: (source, args, context, info) => {
          const id = createNodeId(`Headline >>> ${source.id} >>> BlogPostPart`)
          return context.nodeModel.getNodeById({ id, type: 'BlogPostPart'})
        }
      },
      parsedContent: {
        type: 'RecipePart',
        resolve: (source, args, context, info) => {
          const id = createNodeId(`Content >>> ${source.id} >>> BlogPostPart`)
          return context.nodeModel.getNodeById({ id, type: 'BlogPostPart'})
        }
      }
    }
  }
  createResolvers(resolvers)
}

exports.onCreateNode = async ({ node, createNodeId, actions }) => {
  if (node.internal.type !== 'StrapiArticle') {
    return
  }

  const { createNode } = actions

  createRecipePart(node, 'Headline', node.headline, {createNode, createNodeId})
  createRecipePart(node, 'Content', node.content, {createNode, createNodeId})
}

function createRecipePart(parent, kind, content, {createNodeId, createNode}) {
  const id = createNodeId(`${kind} >>> ${parent.id} >>> BlogPostPart`)
  const node = {
    id: id,
    children: [],
    parent: parent.id,
    internal: {
      content: content,
      type: 'BlogPostPart',
      mediaType: 'text/markdown'
    }
  }

  node.internal.contentDigest = crypto
    .createHash('md5')
    .update(content)
    .digest('hex')

  createNode(node)
  return node
}

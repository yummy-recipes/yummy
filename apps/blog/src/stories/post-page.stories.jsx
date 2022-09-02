import React from 'react'

import PostPage from '../templates/post-page'
import Layout from '../components/layout'
import {
  createPostQueryMock,
  createPostQueryMock_strapiRecipe,
} from '../templates/post-page/index.generated'

const LayoutDecorator = (storyFn) => (
  <Layout categories={[{ slug: 'obiady', name: 'Obiady' }]}>{storyFn()}</Layout>
)

const createRecipe = () =>
  createPostQueryMock_strapiRecipe({
    slug: 'pizza',
    title: 'Pizza',
    category: {
      name: 'Obiady',
      slug: 'test',
    },
    preparationTime: '100',
    tags: [],
    seo: {
      htmlTitle: 'Pizza',
      htmlDescription: 'Pizza',
    },
    parsedHeadline: {
      childMarkdownRemark: {
        html: 'This is pizza',
      },
    },
    parsedDirections: {
      childMarkdownRemark: {
        html: 'Rollo',
      },
    },
    parsedIngredients: {
      childMarkdownRemark: {
        html: 'Yeast',
      },
    },
    gallery: [],
  })

export default {
  title: 'Pages/PostPage',
  component: PostPage,
  decorators: [LayoutDecorator],
}

export const Primary = () => (
  <PostPage
    data={createPostQueryMock({
      strapiRecipe: createRecipe(),
      site: {
        siteMetadata: {
          siteUrl: '/',
        },
      },
    })}
  />
)

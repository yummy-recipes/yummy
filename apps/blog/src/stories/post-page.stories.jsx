import React from 'react'

import PostPage from '../templates/post-page'
import Layout from '../components/layout'
import {
  createPostQueryMock,
  createPostQueryMock_strapiRecipe,
  createPostQueryMock_strapiRecipe_tags,
} from '../templates/post-page/index.generated'

const imageUrl =
  'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg'

const LayoutDecorator = (storyFn) => (
  <Layout
    categories={[{ slug: 'obiady', name: 'Obiady' }]}
    fullHeaderVersion={false}
    isSingleRecipe
  >
    {storyFn()}
  </Layout>
)

const createRecipe = () =>
  createPostQueryMock_strapiRecipe({
    slug: 'pizza',
    title: 'Pizza',
    category: {
      name: 'Obiady',
      slug: 'test',
    },
    cover: {
      image: {
        childImageSharp: {
          fluid: {
            src: imageUrl,
          },
        },
      },
    },
    preparationTime: '100',
    tags: [
      createPostQueryMock_strapiRecipe_tags({
        name: 'My Tag',
        slug: 'mytag',
      }),
      createPostQueryMock_strapiRecipe_tags({
        name: 'My Tag 2',
        slug: 'mytag2',
      }),
    ],
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
  parameters: {
    layout: 'fullscreen',
  },
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

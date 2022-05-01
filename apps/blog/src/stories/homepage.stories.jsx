import React from 'react'

import PostListPage from '../templates/post-list'
import Layout from '../components/layout'
import {
  createBlogListQueryQueryMock,
  createBlogListQueryQueryMock_allStrapiRecipe_edges,
  createBlogListQueryQueryMock_allStrapiRecipe_edges_node,
  createBlogListQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline,
  createBlogListQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline_childMarkdownRemark,
} from '../templates/post-list.generated'

const LayoutDecorator = (storyFn) => (
  <Layout categories={[{ slug: 'obiady', name: 'Obiady' }]}>{storyFn()}</Layout>
)

const createRecipe = () =>
  createBlogListQueryQueryMock_allStrapiRecipe_edges({
    node: createBlogListQueryQueryMock_allStrapiRecipe_edges_node({
      slug: 'pizza',
      title: 'Pizza',

      category: {
        slug: 'test',
      },
      parsedHeadline:
        createBlogListQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline(
          {
            childMarkdownRemark:
              createBlogListQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline_childMarkdownRemark(
                {
                  html: 'This is pizza',
                },
              ),
          },
        ),
    }),
  })

export default {
  title: 'Pages/PostListPage',
  component: PostListPage,
  decorators: [LayoutDecorator],
}

export const Primary = () => (
  <PostListPage
    data={createBlogListQueryQueryMock({
      allStrapiRecipe: {
        edges: [
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
          createRecipe(),
        ],
      },
      site: {
        siteMetadata: {
          siteUrl: '/',
        },
      },
    })}
    pageContext={{
      currentPage: 1,
      totalPages: 10,
    }}
    location={{
      pathname: '/',
    }}
  />
)

import React from 'react'

import PostListPage from '../templates/post-list'
import { createBlogListQueryQueryMock } from '../templates/post-list.generated'

const BackgroundDecorator = (storyFn) => (
  <div style={{ backgroundColor: '#e98500' }}>{storyFn()}</div>
)

export default {
  title: 'Pages/PostListPage',
  component: PostListPage,
  decorators: [BackgroundDecorator],
}

export const Primary = () => (
  <PostListPage
    data={createBlogListQueryQueryMock()}
    pageContext={{
      currentPage: 1,
      totalPages: 10,
    }}
    location={{
      pathname: '/',
    }}
  />
)

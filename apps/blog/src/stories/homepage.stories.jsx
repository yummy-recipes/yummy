import React from 'react'

import PostListPage from '../templates/post-list'


const BackgroundDecorator = storyFn => <div style={{backgroundColor: '#e98500'}}>{storyFn()}</div>

export default {
  title: 'PostListPage',
  component: PostListPage,
  decorators: [
    BackgroundDecorator
  ]
}

export const Primary = () => (
<PostListPage
  data={{}}
  pageContext={{
    currentPage: 1,
    totalPages: 10
  }}
  location={null}
/>
)

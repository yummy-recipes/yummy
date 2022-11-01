import React from 'react'
import BlogPostCard from '../components/blog-post-card'
import Paginator from '../components/paginator'
import Page from '../components/page'

import * as styles from './page.module.css'

export default function BlogPostListContent({
  allPostsData,
  pageInfo,
  location,
}) {
  const BlogPosts = allPostsData.edges.map((edge, index) => {
    return (
      <BlogPostCard
        key={edge.node.id}
        post={edge.node}
        className={styles.singlePost}
        criticalImage={index < 3}
      />
    )
  })

  return (
    <Page>
      <div className={styles.blogPosts}>{BlogPosts}</div>
      <Paginator
        currentPage={pageInfo.currentPage}
        totalPages={pageInfo.totalPages}
        currentPath={location.pathname}
      />
    </Page>
  )
}

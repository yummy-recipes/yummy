import React from 'react'
import BlogPostCard from '../components/blog-post-card'
import Paginator from '../components/paginator'

import * as styles from './page.module.css'

export default function BlogPostListContent({allPostsData, pageInfo, location}) {

  const BlogPosts = allPostsData.edges
    .map((edge, index) => {
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
    <div className={styles.layout}>
      <section className={styles.main}>
        <div className={styles.blogBosts}>
          {BlogPosts}
        </div>
        <Paginator currentPage={pageInfo.currentPage} totalPages={pageInfo.totalPages} currentPath={location.pathname} />
      </section>
    </div>
  )
}

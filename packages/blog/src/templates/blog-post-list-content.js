import React from 'react'
import { BlogPostCard, Paginator } from '@yummy/components'

import styles from './page.module.sass'

export default function BlogPostListContent({allPostsData, pageInfo, location}) {

  const BlogPosts = allPostsData.edges
    .map((edge, index) => {
      return (
        <BlogPostCard
          key={edge.node.id}
          post={edge.node}
          className={styles.single_post}
          criticalImage={index < 3}
        />
      )
    })

  return (
    <div className={styles.layout}>
      <section className={styles.main}>
        <div className={styles.blog_posts}>
          {BlogPosts}
        </div>
        <Paginator currentPage={pageInfo.currentPage} totalPages={pageInfo.totalPages} currentPath={location.pathname} />
      </section>
    </div>
  )
}

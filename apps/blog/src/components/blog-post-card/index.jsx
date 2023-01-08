import React from 'react'
import { Link } from 'gatsby'
import ChevronRight from '../icons/ChevronRight'
import * as styles from './blog-post-card.module.css'

export default function BlogPostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.contentHeader}>
        <span className={styles.contentCategory}>blog</span>
        <h2 className={styles.contentTitle}>{post.title}</h2>
        <span className={styles.datePublished}>{post.publishedAt}</span>
        <div
          className={styles.contentSummary}
          dangerouslySetInnerHTML={{
            __html: post.parsedHeadline.childMarkdownRemark.html,
          }}
        />
      </div>

      <span className={styles.showMore}>
        Czytaj dalej
        <ChevronRight className={styles.showMoreIcon} />
      </span>
    </Link>
  )
}

import React from 'react'

import * as styles from './post-card-header.module.sass'

const PostCardHeader = ({ title, categoryName, html }) => {
  return (
    <div className={styles.contentHeader}>
      <span className={styles.contentCategory}>{categoryName}</span>
      <h2 className={styles.contentTitle}>
        {title}
      </h2>
      <div className={styles.contentSummary} dangerouslySetInnerHTML={ {__html: html} }></div>
    </div>
  )
}

export default PostCardHeader

import React from 'react'

import * as styles from './post-card-header.module.css'

const PostCardHeader = ({ title, html }) => {
  return (
    <div className={styles.contentHeader}>
      <h2 className={styles.contentTitle}>
        {title}
      </h2>
      <div className={styles.contentSummary} dangerouslySetInnerHTML={ {__html: html} }></div>
    </div>
  )
}

export default PostCardHeader

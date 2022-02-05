import Img from 'gatsby-image'
import React from 'react'

import * as styles from './post-card-cover.module.sass'

const PostCardCover = ({ fluid, criticalImage }) => {
  return (
    <div className={styles.coverLink}>
      <Img
        fluid={fluid}
        className={styles.cover}
        critical={criticalImage}
      />
    </div>
  )
}

export default PostCardCover

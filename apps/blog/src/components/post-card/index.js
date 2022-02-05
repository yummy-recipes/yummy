import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import TimeToPrepare from '../time_to_prepare'
import ChevronRight from '../icons/ChevronRight'
import VegetarianMark from '../icons/VegetarianMark'

import * as styles from './post-card.module.sass'

export default function PostCard({post, className, criticalImage}) {

  return (
    <Link to={`/${post.category.slug}/${post.slug}`} className={[styles.card, className].join(' ')}>
      <div className={styles.coverLink}>
        {post.cover && (
          <Img
            fluid={post.cover.childImageSharp.fluid}
            className={styles.cover}
            critical={criticalImage}
          />
        )}
      </div>

      <div className={styles.contentHeader}>
        <span className={styles.contentCategory}>{post.category.name}</span>
        <h2 className={styles.contentTitle}>
          {post.title}
        </h2>
        <div className={styles.content_summary} dangerouslySetInnerHTML={ {__html: post.parsedHeadline.childMarkdownRemark.html} }></div>
      </div>

      <hr className={styles.separator} />

      <div className={styles.attributes}>
        <TimeToPrepare>{post.preparationTime}</TimeToPrepare>
        {
          post.tags.indexOf('wegetariańskie') !== -1
            && <VegetarianMark className={styles.vegetarianIcon} />
        }
      </div>

      <span className={styles.showMore}>
        Pokaż przepis
        <ChevronRight className={styles.showMoreIcon}/>
      </span>
  </Link>
  )
}

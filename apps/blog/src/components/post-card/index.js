import React from 'react'
import { Link } from 'gatsby'
import ChevronRight from '../icons/ChevronRight'

import * as styles from './post-card.module.css'

export default function PostCard({ href, className, children }) {
  return (
    <Link to={href} className={[styles.card, className].join(' ')}>
      {children}

      <span className={styles.showMore}>
        Pokaż przepis
        <ChevronRight className={styles.showMoreIcon}/>
      </span>
  </Link>
  )
}

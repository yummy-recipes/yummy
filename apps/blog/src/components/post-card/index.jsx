import React from 'react'
import { Link } from 'gatsby'

import * as styles from './post-card.module.css'

export default function PostCard({ href, className, children }) {
  return (
    <Link to={href} className={[styles.card, className].join(' ')}>
      {children}
    </Link>
  )
}

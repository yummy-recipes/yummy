import React from 'react'
import { Link } from 'gatsby'
import Logo from '../icons/LogoSimple'
import * as styles from './breadcrumbs.module.sass'

console.log({ styles })

export default function Breadcrumbs({ subsectionName, subsectionSlug }) {
  return (
    <ol className={styles.breadcrumbs}>
      <li className={styles.breadcrumb_item}>
        <Link to="/" className={styles.breadcrumb_link}>
          <span className={styles.breadcrumb_homepage_text}>Strona Główna</span>
          <span className={styles.breadcrumb_homepage_logo}>
            <Logo className={styles.svg_logo} />
          </span>
        </Link>
      </li>
      <li className={styles.breadcrumb_item}><Link to={`/${subsectionSlug}`} className={styles.breadcrumb_link}>{subsectionName}</Link></li>
    </ol>
  )
}

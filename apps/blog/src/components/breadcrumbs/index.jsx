import React from 'react'
import { Link } from 'gatsby'
import Logo from '../icons/LogoSimple'
import * as styles from './breadcrumbs.module.css'

export default function Breadcrumbs({ subsectionName, subsectionSlug }) {
  return (
    <ol className={styles.breadcrumbs}>
      <li className={styles.breadcrumbItem}>
        <Link to="/" className={styles.breadcrumbLink}>
          <span className={styles.breadcrumbHomepageText}>Strona Główna</span>
          <span className={styles.breadcrumbHomepageLogo}>
            <Logo className={styles.svgLogo} />
          </span>
        </Link>
      </li>
      <li className={styles.breadcrumbItem}><Link to={`/${subsectionSlug}`} className={styles.breadcrumbLink}>{subsectionName}</Link></li>
    </ol>
  )
}

import React from 'react'
import Navbar from '../navbar'
import Logo from '../icons/Logo'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({ fullVersion, subsection, isSingleRecipe, categories, children }) => {
  const headerStyles = isSingleRecipe
    ? [styles.header, styles.singlePost].join(' ')
    : styles.header

  return (
    <header className={headerStyles}>
      <div className={styles.navbar}>
        <Navbar categories={categories} hasHomepageLink={fullVersion === false}/>
      </div>

      {
        fullVersion !== false
        ?
          <Link to='/' className={styles.logoLink}>
            <Logo className={styles.logo}/>
          </Link>
        : null
      }

      {children}

      {
        subsection
        && (
          <div className={styles.subsectionHeadingWrapper}>
            <h2 className={styles.subsectionHeading}>{subsection}</h2>
          </div>
        )
      }
    </header>
  )
}

export default Header
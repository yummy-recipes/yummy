import React from 'react'
import Navbar from '../navbar'
import LogoSimple from '../icons/LogoSimple'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({ subsection, categories, children }) => {
  return (
    <header className="relative">
      <div className="flex justify-between relative z-20">
        <Link to="/">
          <LogoSimple className="h-[46px] my-2" />
        </Link>
        <Navbar categories={categories} />
      </div>

      {children}

      {subsection && (
        <div className={styles.subsectionHeadingWrapper}>
          <h2 className={styles.subsectionHeading}>{subsection}</h2>
        </div>
      )}
    </header>
  )
}

export default Header

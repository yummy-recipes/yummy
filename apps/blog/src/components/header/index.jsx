import React from 'react'
import Navbar from '../navbar'
import LogoSimple from '../icons/LogoSimple'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({ subsection, categories, children }) => {
  return (
    <header className="relative">
      <div className="flex justify-between relative z-20">
        <Link to="/" className="ml-2">
          <LogoSimple className="h-[46px] my-2" />
        </Link>
        <Navbar categories={categories} />
      </div>

      {children}

      {subsection && (
        <div className="pb-5 max-w-7xl mx-auto md:pb-6">
          <h2
            className={[
              'text-4xl px-2 pt-4 pb-3 tracking-wider uppercase md:px-4',
              styles.hypensAuto,
            ].join(' ')}
          >
            {subsection}
          </h2>
        </div>
      )}
    </header>
  )
}

export default Header

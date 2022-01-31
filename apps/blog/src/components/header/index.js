import React from 'react'
import Navbar from '../navbar'
import Searchbar from '../searchbar'
import Logo from '../icons/Logo'
import { Link } from 'gatsby'
import * as styles from './header.module.sass'

export default class Header extends React.Component {
  state = {
    alreadyMounted: false
  }

  componentDidMount() {
    this.setState({ alreadyMounted: true })
  }

  render () {
    const { fullVersion, subsection, isSingleRecipe, categories } = this.props
    const { alreadyMounted } = this.state

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
            && [
              <Link to='/' className={styles.logoLink} key={'logo'}>
                <Logo className={styles.logo}/>
              </Link>,
              <Searchbar forceVisibility={alreadyMounted} className={styles.searchbar} key={'searchbar'}/>
            ]
        }

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
}

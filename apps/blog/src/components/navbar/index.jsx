import React from 'react'
import { Link } from 'gatsby'
import MenuBarsIcon from '../icons/MenuBars'
import MenuCloseIcon from '../icons/MenuClose'
import * as styles from './navbar.module.css'

function titleize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  }

  handleEscapeKey = (event) => {
    if (event.keyCode === 27) {
      this.handleMenuCloseClick()
    }
  }

  handleMenuOpenClick = () => {
    document.addEventListener('keydown', this.handleEscapeKey)

    this.setState({
      menuOpen: true,
    })
  }

  handleMenuCloseClick = () => {
    document.removeEventListener('keydown', this.handleEscapeKey)

    this.setState({
      menuOpen: false,
    })
  }

  render() {
    const categoryMenuClass = this.state.menuOpen
      ? [styles.navbarCategories, styles.expanded].join(' ')
      : styles.navbarCategories

    const overlay = this.state.menuOpen ? (
      <div
        className={styles.navbarMenuOverlay}
        onClick={this.handleMenuCloseClick}
      />
    ) : null

    const { categories } = this.props

    return (
      <nav className={styles.navbar}>
        <button
          className={[
            styles.navbarMenuIcon,
            this.state.menuOpen ? styles.hidden : '',
          ].join(' ')}
          aria-label="Open category menu"
          onClick={this.handleMenuOpenClick}
        >
          <span aria-hidden="true">
            <MenuBarsIcon className={styles.iconMenu} />
          </span>
        </button>
        <button
          className={[
            styles.navbarMenuIcon,
            this.state.menuOpen ? '' : styles.hidden,
          ].join(' ')}
          aria-label="Close category menu"
          onClick={this.handleMenuCloseClick}
        >
          <span aria-hidden="true">
            <MenuCloseIcon className={styles.iconMenu} />
          </span>
        </button>
        <div className={categoryMenuClass}>
          {overlay}

          {categories.map(({ slug, name }) => (
            <Link
              to={`/${slug}`}
              key={slug}
              className={styles.navbarLink}
              onClick={this.handleMenuCloseClick}
            >
              {titleize(name)}
            </Link>
          ))}
        </div>
      </nav>
    )
  }
}

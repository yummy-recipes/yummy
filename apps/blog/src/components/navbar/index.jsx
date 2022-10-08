import React from 'react'
import { Link } from 'gatsby'
import MenuBarsIcon from '../icons/MenuBars'
import MenuCloseIcon from '../icons/MenuClose'

function titleize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const MenuButton = (props) => {
  return (
    <button
      {...props}
      className={[
        'background-transparent px-2 md:p-0 md:m-0 md:hidden z-10',
        props.className ?? '',
      ].join(' ')}
    />
  )
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
    const categoryMenuClass = [
      'flex flex-col absolute left-0 w-full z-10 md:relative md:flex-row md:align-center md:justify-center',
      ...(this.state.menuOpen ? [] : ['hidden md:flex']),
    ].join(' ')

    const overlay = this.state.menuOpen ? (
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-0"
        onClick={this.handleMenuCloseClick}
      />
    ) : null

    const { categories } = this.props

    return (
      <nav className="px-2 py-1 md:w-full">
        <div className="relative z-20">
          <MenuButton
            className={this.state.menuOpen ? 'hidden' : null}
            aria-label="Open category menu"
            onClick={this.handleMenuOpenClick}
          >
            <span aria-hidden="true">
              <MenuBarsIcon className="align-baseline" />
            </span>
          </MenuButton>

          <MenuButton
            className={this.state.menuOpen ? null : 'hidden'}
            aria-label="Close category menu"
            onClick={this.handleMenuCloseClick}
          >
            <span aria-hidden="true">
              <MenuCloseIcon className="align-baseline" />
            </span>
          </MenuButton>
        </div>

        <div className={categoryMenuClass}>
          {overlay}

          {categories.map(({ slug, name }) => (
            <Link
              to={`/${slug}`}
              key={slug}
              className="font-semibold text-gray-600 px-2 py-3 mx-1 hover:text-gray-800 bg-white md:bg-none"
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

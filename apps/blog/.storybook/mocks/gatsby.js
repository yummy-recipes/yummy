import _GatsbyLink from 'gatsby-link'

// https://github.com/vitejs/vite/issues/2139
const GatsbyLink = _GatsbyLink.default ? _GatsbyLink.default : _GatsbyLink

export function graphql() {
  return null
}

export function navigate() {
  return null
}

export const Link = GatsbyLink

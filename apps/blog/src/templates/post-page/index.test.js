import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { Helmet } from 'react-helmet'
import { StaticQuery } from 'gatsby'

import PostPage from './index'

describe('PostPage', () => {
  afterEach(cleanup)

  it('provides meta tags overrides', () => {
    StaticQuery.mockImplementation(({ render }) =>
      render({ site: { siteMetadata: { siteUrl: 'http://localhost.test' } } }),
    )

    const strapiRecipe = {
      seo: {
        htmlTitle: 'Recipe title',
        htmlDescription: 'Recipe description',
      },
      tags: [
        { slug: 'tag1', name: 'Tag1' },
        { slug: 'tag2', name: 'Tag2' },
      ],
      category: { name: 'Category Name' },
      parsedHeadline: { childMarkdownRemark: { html: 'Lorem ipsum' } },
      parsedIngredients: { childMarkdownRemark: { html: 'Lorem ipsum' } },
      parsedDirections: { childMarkdownRemark: { html: 'Lorem ipsum' } },
      gallery: [],
      cover: {
        image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: '/cover.jpg',
              srcSet: '',
              sizes: '',
            },
          },
        },
      },
    }

    const site = {
      siteMetadata: {
        siteUrl: '/test',
      },
    }

    const data = { strapiRecipe, site }

    render(<PostPage data={data} />)

    const helmet = Helmet.peek()

    expect(helmet.title).toEqual('Recipe title')
    expect(helmet.metaTags).toContainEqual({
      name: 'description',
      content: 'Recipe description',
    })
    expect(helmet.metaTags).toContainEqual({
      property: 'og:type',
      content: 'article',
    })
    expect(helmet.metaTags).toContainEqual({
      property: 'article:section',
      content: 'Category Name',
    })
    expect(helmet.metaTags).toContainEqual({
      property: 'article:tag',
      content: 'Tag1',
    })
    expect(helmet.metaTags).toContainEqual({
      property: 'article:tag',
      content: 'Tag2',
    })
    expect(helmet.metaTags).toContainEqual({
      property: 'og:image',
      content: '/test/cover.jpg',
    })
  })
})

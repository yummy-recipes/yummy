import React from 'react'
import { graphql } from 'gatsby'

import Page from './page'
import PostListContent from './post-list-content'

export default function PostListPage({data, pageContext, location}) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages
  }

  return (
    <Page>
      <PostListContent
        allRecipesData={data.allStrapiRecipe}
        pageInfo={pageInfo}
        location={location}
      />
    </Page>
  )
}

export const query = graphql`
fragment postForList on StrapiRecipe {
  id
  title
  parsedHeadline { 
    childMarkdownRemark {
      html
    }
  }
  slug
  tags {
    name 
    slug  
  }
  category {
    name
    slug
  }
  preparationTime
  published_at(formatString: "D MMM YYYY", locale: "pl")
  cover {
    image {
      childImageSharp {
        fluid(maxWidth: 1000, traceSVG: { color: "#ec973b" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
}
`

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allStrapiRecipe (
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...postForList
        }
      }
    }
  }
`

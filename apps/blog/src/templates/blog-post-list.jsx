import React from 'react'
import { graphql } from 'gatsby'

import Metadata from './metadata'
import BlogPostListContent from './blog-post-list-content'

export default function BlogPostListPage({ data, pageContext, location }) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages,
  }

  return (
    <Metadata siteUrl={data.site.siteMetadata.siteUrl}>
      <BlogPostListContent
        allPostsData={data.allStrapiArticle}
        pageInfo={pageInfo}
        location={location}
      />
    </Metadata>
  )
}

export const query = graphql`
  fragment blogPostForList on STRAPI_ARTICLE {
    id
    title
    slug
    publishedAt(formatString: "D MMM YYYY", locale: "pl")
    parsedHeadline {
      childMarkdownRemark {
        html
      }
    }
  }
`

export const pageQuery = graphql`
  query blogPostListQuery($skip: Int!, $limit: Int!) {
    ...siteMetadata
    ...allCategories

    allStrapiArticle(
      sort: { order: DESC, fields: [publishedAt] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...blogPostForList
        }
      }
    }
  }
`

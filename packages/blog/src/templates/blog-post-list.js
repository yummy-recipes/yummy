import React from 'react'
import { graphql } from 'gatsby'

import Page from './page'
import BlogPostListContent from './blog-post-list-content'

export default function BlogPostListPage({data, pageContext, location}) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages
  }

  return (
    <Page>
      <BlogPostListContent
        allPostsData={data.allStrapiArticle}
        pageInfo={pageInfo}
        location={location}
      />
    </Page>
  )
}

export const query = graphql`
fragment blogPostForList on StrapiArticle {
  id
  title
  slug
  published_at(formatString: "D MMM YYYY", locale: "pl")
  headline
}
`

export const pageQuery = graphql`
  query blogPostListQuery($skip: Int!, $limit: Int!) {
    allStrapiArticle (
      sort: { order: DESC, fields: [published_at] }
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

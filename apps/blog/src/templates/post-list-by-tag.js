import React from 'react'
import { graphql } from 'gatsby'

import Page from './page'
import PostListContent from './post-list-content'

export default function PostListByTagPage({ data, pageContext, location }) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages,
  }

  return (
    <Page siteUrl={data.site.siteMetadata.siteUrl}>
      <PostListContent
        allRecipesData={data.allStrapiRecipe}
        pageInfo={pageInfo}
        location={location}
      />
    </Page>
  )
}

export const pageQuery = graphql`
  query blogListByTagQuery($tag: String!, $skip: Int!, $limit: Int!) {
    ...siteMetadata
    ...allCategories

    allStrapiRecipe(
      filter: { tags: { elemMatch: { slug: { in: [$tag] } } } }
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

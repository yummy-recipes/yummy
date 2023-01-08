import React from 'react'
import { graphql } from 'gatsby'

import Metadata from './metadata'
import PostListContent from './post-list-content'

export default function PostListByTagPage({ data, pageContext, location }) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages,
  }

  return (
    <Metadata siteUrl={data.site.siteMetadata.siteUrl}>
      <PostListContent
        allRecipesData={data.allStrapiRecipe}
        pageInfo={pageInfo}
        location={location}
      />
    </Metadata>
  )
}

export const pageQuery = graphql`
  query blogListByTagQuery($slug: String!, $skip: Int!, $limit: Int!) {
    ...siteMetadata
    ...allCategories

    allStrapiRecipe(
      filter: { tags: { elemMatch: { slug: { in: [$slug] } } } }
      sort: { order: DESC, fields: [publishedAt] }
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

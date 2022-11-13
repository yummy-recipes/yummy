import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Metadata from './metadata'
import PostListContent from './post-list-content'

export default function PostListByCategoryPage({
  data,
  pageContext,
  location,
}) {
  const pageInfo = {
    currentPage: pageContext.currentPage,
    totalPages: pageContext.totalPages,
  }

  return (
    <Metadata siteUrl={data.site.siteMetadata.siteUrl}>
      <Helmet>
        <meta
          name="description"
          content={`Kolekcja naszych ulubionych przepisów kulinarnych w kategorii: ${pageContext.category}`}
        ></meta>
      </Helmet>

      <PostListContent
        allRecipesData={data.allStrapiRecipe}
        pageInfo={pageInfo}
        location={location}
      />
    </Metadata>
  )
}

export const pageQuery = graphql`
  query blogListByCategoryQuery($category: String!, $skip: Int!, $limit: Int!) {
    ...siteMetadata
    ...allCategories

    allStrapiRecipe(
      filter: { category: { name: { eq: $category } } }
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

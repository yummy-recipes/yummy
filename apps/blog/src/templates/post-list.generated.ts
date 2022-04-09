import * as Types from '../types'

export type PostForListFragment = {
  __typename?: 'StrapiRecipe'
  id: string
  title?: string | null
  slug?: string | null
  preparationTime?: number | null
  published_at?: any | null
  parsedHeadline?: {
    __typename?: 'RecipePart'
    childMarkdownRemark?: {
      __typename?: 'MarkdownRemark'
      html?: string | null
    } | null
  } | null
  tags?: Array<{
    __typename?: 'StrapiRecipeTags'
    name?: string | null
    slug?: string | null
  } | null> | null
  category?: {
    __typename?: 'StrapiRecipeCategory'
    name?: string | null
    slug?: string | null
  } | null
  cover?: {
    __typename?: 'StrapiRecipeCover'
    image?: {
      __typename?: 'File'
      childImageSharp?: {
        __typename?: 'ImageSharp'
        fluid?: {
          __typename?: 'ImageSharpFluid'
          tracedSVG?: string | null
          aspectRatio: number
          src: string
          srcSet: string
          sizes: string
        } | null
      } | null
    } | null
  } | null
}

export type BlogListQueryQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogListQueryQuery = {
  __typename?: 'Query'
  allStrapiRecipe: {
    __typename?: 'StrapiRecipeConnection'
    edges: Array<{
      __typename?: 'StrapiRecipeEdge'
      node: {
        __typename?: 'StrapiRecipe'
        id: string
        title?: string | null
        slug?: string | null
        preparationTime?: number | null
        published_at?: any | null
        parsedHeadline?: {
          __typename?: 'RecipePart'
          childMarkdownRemark?: {
            __typename?: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
        tags?: Array<{
          __typename?: 'StrapiRecipeTags'
          name?: string | null
          slug?: string | null
        } | null> | null
        category?: {
          __typename?: 'StrapiRecipeCategory'
          name?: string | null
          slug?: string | null
        } | null
        cover?: {
          __typename?: 'StrapiRecipeCover'
          image?: {
            __typename?: 'File'
            childImageSharp?: {
              __typename?: 'ImageSharp'
              fluid?: {
                __typename?: 'ImageSharpFluid'
                tracedSVG?: string | null
                aspectRatio: number
                src: string
                srcSet: string
                sizes: string
              } | null
            } | null
          } | null
        } | null
      }
    }>
  }
}

export function createBlogListQueryQueryMock(
  props: Partial<BlogListQueryQuery>,
): BlogListQueryQuery {
  return {
    allStrapiRecipe: {
      __typename: 'StrapiRecipeConnection',
      edges: [],
    },

    ...props,
  }
}

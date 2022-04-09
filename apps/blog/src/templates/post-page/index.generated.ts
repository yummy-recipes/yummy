import * as Types from '../../types'

export type Unnamed_1_QueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type Unnamed_1_Query = {
  __typename?: 'Query'
  strapiRecipe?: {
    __typename?: 'StrapiRecipe'
    slug?: string | null
    title?: string | null
    preparationTime?: number | null
    published_at?: any | null
    seo?: {
      __typename?: 'StrapiRecipeSeo'
      htmlTitle?: string | null
      htmlDescription?: string | null
    } | null
    parsedHeadline?: {
      __typename?: 'RecipePart'
      childMarkdownRemark?: {
        __typename?: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
    parsedDirections?: {
      __typename?: 'RecipePart'
      childMarkdownRemark?: {
        __typename?: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
    parsedIngredients?: {
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
    gallery?: Array<{
      __typename?: 'StrapiRecipeGallery'
      image?: {
        __typename?: 'File'
        childImageSharp?: {
          __typename?: 'ImageSharp'
          small?: {
            __typename?: 'ImageSharpFluid'
            tracedSVG?: string | null
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
          } | null
          large?: {
            __typename?: 'ImageSharpFluid'
            tracedSVG?: string | null
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
          } | null
        } | null
      } | null
    } | null> | null
    category?: {
      __typename?: 'StrapiRecipeCategory'
      name?: string | null
      slug?: string | null
    } | null
  } | null
}

export function createUnnamed_1_QueryMock(
  props: Partial<Unnamed_1_Query>,
): Unnamed_1_Query {
  return {
    strapiRecipe: null,

    ...props,
  }
}

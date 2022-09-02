import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type Unnamed_1_QueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type Unnamed_1_Query = {
  __typename: 'Query'
  strapiArticle?: {
    __typename: 'StrapiArticle'
    slug?: string | null
    title?: string | null
    published_at?: any | null
    parsedHeadline?: {
      __typename: 'RecipePart'
      childMarkdownRemark?: {
        __typename: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
    parsedContent?: {
      __typename: 'RecipePart'
      childMarkdownRemark?: {
        __typename: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
  } | null
  site?: {
    __typename: 'Site'
    siteMetadata?: {
      __typename: 'SiteSiteMetadata'
      siteUrl?: string | null
    } | null
  } | null
  allCategories: {
    __typename: 'RecipeCategoryConnection'
    edges: Array<{
      __typename: 'RecipeCategoryEdge'
      node: {
        __typename: 'RecipeCategory'
        name?: string | null
        slug?: string | null
      }
    }>
  }
}

export function createUnnamed_1_QueryMock(
  props: Partial<Unnamed_1_Query> = {},
): Unnamed_1_Query {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createUnnamed_1_QueryMock_allCategories({}),
    strapiArticle: null,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_site(
  props: Partial<NonNullable<Unnamed_1_Query['site']>> = {},
): NonNullable<Unnamed_1_Query['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<NonNullable<Unnamed_1_Query['site']>['siteMetadata']>
  > = {},
): NonNullable<NonNullable<Unnamed_1_Query['site']>['siteMetadata']> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_allCategories(
  props: Partial<Unnamed_1_Query['allRecipeCategory']> = {},
): Unnamed_1_Query['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createUnnamed_1_QueryMock_allCategories_edges(
  props: Partial<Unnamed_1_Query['allRecipeCategory']['edges'][number]> = {},
): Unnamed_1_Query['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createUnnamed_1_QueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createUnnamed_1_QueryMock_allCategories_edges_node(
  props: Partial<
    Unnamed_1_Query['allRecipeCategory']['edges'][number]['node']
  > = {},
): Unnamed_1_Query['allRecipeCategory']['edges'][number]['node'] {
  const recipeCategory = schemaFactories.createRecipeCategoryMock({
    name: props.name,
    slug: props.slug,
  })
  return {
    __typename: 'RecipeCategory',
    name: recipeCategory.name,
    slug: recipeCategory.slug,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_strapiArticle(
  props: Partial<NonNullable<Unnamed_1_Query['strapiArticle']>> = {},
): NonNullable<Unnamed_1_Query['strapiArticle']> {
  const strapiArticle = schemaFactories.createStrapiArticleMock({
    slug: props.slug,
    title: props.title,
    published_at: props.published_at,
  })
  return {
    __typename: 'StrapiArticle',
    parsedHeadline: null,
    parsedContent: null,
    slug: strapiArticle.slug,
    title: strapiArticle.title,
    published_at: strapiArticle.published_at,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_strapiArticle_parsedHeadline(
  props: Partial<
    NonNullable<NonNullable<Unnamed_1_Query['strapiArticle']>['parsedHeadline']>
  > = {},
): NonNullable<
  NonNullable<Unnamed_1_Query['strapiArticle']>['parsedHeadline']
> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_strapiArticle_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<Unnamed_1_Query['strapiArticle']>['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<Unnamed_1_Query['strapiArticle']>['parsedHeadline']
  >['childMarkdownRemark']
> {
  const markdownRemark = schemaFactories.createMarkdownRemarkMock({
    html: props.html,
  })
  return {
    __typename: 'MarkdownRemark',
    html: markdownRemark.html,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_strapiArticle_parsedContent(
  props: Partial<
    NonNullable<NonNullable<Unnamed_1_Query['strapiArticle']>['parsedContent']>
  > = {},
): NonNullable<NonNullable<Unnamed_1_Query['strapiArticle']>['parsedContent']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createUnnamed_1_QueryMock_strapiArticle_parsedContent_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<Unnamed_1_Query['strapiArticle']>['parsedContent']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<Unnamed_1_Query['strapiArticle']>['parsedContent']
  >['childMarkdownRemark']
> {
  const markdownRemark = schemaFactories.createMarkdownRemarkMock({
    html: props.html,
  })
  return {
    __typename: 'MarkdownRemark',
    html: markdownRemark.html,
    ...props,
  }
}

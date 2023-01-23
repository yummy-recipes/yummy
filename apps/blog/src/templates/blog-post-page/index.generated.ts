import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type BlogPostQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type BlogPostQuery = {
  __typename: 'Query'
  strapiArticle?: {
    __typename: 'STRAPI_ARTICLE'
    slug?: string | null
    title?: string | null
    publishedAt?: any | null
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

export function createBlogPostQueryMock(
  props: Partial<BlogPostQuery> = {},
): BlogPostQuery {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createBlogPostQueryMock_allCategories({}),
    strapiArticle: null,
    ...props,
  }
}

export function createBlogPostQueryMock_site(
  props: Partial<NonNullable<BlogPostQuery['site']>> = {},
): NonNullable<BlogPostQuery['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createBlogPostQueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<NonNullable<BlogPostQuery['site']>['siteMetadata']>
  > = {},
): NonNullable<NonNullable<BlogPostQuery['site']>['siteMetadata']> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createBlogPostQueryMock_allCategories(
  props: Partial<BlogPostQuery['allRecipeCategory']> = {},
): BlogPostQuery['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createBlogPostQueryMock_allCategories_edges(
  props: Partial<BlogPostQuery['allRecipeCategory']['edges'][number]> = {},
): BlogPostQuery['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createBlogPostQueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createBlogPostQueryMock_allCategories_edges_node(
  props: Partial<
    BlogPostQuery['allRecipeCategory']['edges'][number]['node']
  > = {},
): BlogPostQuery['allRecipeCategory']['edges'][number]['node'] {
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

export function createBlogPostQueryMock_strapiArticle(
  props: Partial<NonNullable<BlogPostQuery['strapiArticle']>> = {},
): NonNullable<BlogPostQuery['strapiArticle']> {
  const strapiArticle = schemaFactories.createStrapi_ArticleMock({
    slug: props.slug,
    title: props.title,
    publishedAt: props.publishedAt,
  })
  return {
    __typename: 'STRAPI_ARTICLE',
    parsedHeadline: null,
    parsedContent: null,
    slug: strapiArticle.slug,
    title: strapiArticle.title,
    publishedAt: strapiArticle.publishedAt,
    ...props,
  }
}

export function createBlogPostQueryMock_strapiArticle_parsedHeadline(
  props: Partial<
    NonNullable<NonNullable<BlogPostQuery['strapiArticle']>['parsedHeadline']>
  > = {},
): NonNullable<NonNullable<BlogPostQuery['strapiArticle']>['parsedHeadline']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createBlogPostQueryMock_strapiArticle_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<BlogPostQuery['strapiArticle']>['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<BlogPostQuery['strapiArticle']>['parsedHeadline']
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

export function createBlogPostQueryMock_strapiArticle_parsedContent(
  props: Partial<
    NonNullable<NonNullable<BlogPostQuery['strapiArticle']>['parsedContent']>
  > = {},
): NonNullable<NonNullable<BlogPostQuery['strapiArticle']>['parsedContent']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createBlogPostQueryMock_strapiArticle_parsedContent_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<BlogPostQuery['strapiArticle']>['parsedContent']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<BlogPostQuery['strapiArticle']>['parsedContent']
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

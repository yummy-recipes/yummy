import * as Types from '../types'

import * as schemaFactories from '../types'
export type BlogPostForListFragment = {
  __typename: 'StrapiArticle'
  id: string
  title?: string | null
  slug?: string | null
  published_at?: any | null
  parsedHeadline?: {
    __typename: 'RecipePart'
    childMarkdownRemark?: {
      __typename: 'MarkdownRemark'
      html?: string | null
    } | null
  } | null
}

export type BlogPostListQueryQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogPostListQueryQuery = {
  __typename: 'Query'
  allStrapiArticle: {
    __typename: 'StrapiArticleConnection'
    edges: Array<{
      __typename: 'StrapiArticleEdge'
      node: {
        __typename: 'StrapiArticle'
        id: string
        title?: string | null
        slug?: string | null
        published_at?: any | null
        parsedHeadline?: {
          __typename: 'RecipePart'
          childMarkdownRemark?: {
            __typename: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
      }
    }>
  }
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

export function createBlogPostListQueryQueryMock(
  props: Partial<BlogPostListQueryQuery> = {},
): BlogPostListQueryQuery {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createBlogPostListQueryQueryMock_allCategories({}),
    allStrapiArticle: createBlogPostListQueryQueryMock_allStrapiArticle({}),
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_site(
  props: Partial<NonNullable<BlogPostListQueryQuery['site']>> = {},
): NonNullable<BlogPostListQueryQuery['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<NonNullable<BlogPostListQueryQuery['site']>['siteMetadata']>
  > = {},
): NonNullable<NonNullable<BlogPostListQueryQuery['site']>['siteMetadata']> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allCategories(
  props: Partial<BlogPostListQueryQuery['allRecipeCategory']> = {},
): BlogPostListQueryQuery['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allCategories_edges(
  props: Partial<
    BlogPostListQueryQuery['allRecipeCategory']['edges'][number]
  > = {},
): BlogPostListQueryQuery['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createBlogPostListQueryQueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allCategories_edges_node(
  props: Partial<
    BlogPostListQueryQuery['allRecipeCategory']['edges'][number]['node']
  > = {},
): BlogPostListQueryQuery['allRecipeCategory']['edges'][number]['node'] {
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

export function createBlogPostListQueryQueryMock_allStrapiArticle(
  props: Partial<BlogPostListQueryQuery['allStrapiArticle']> = {},
): BlogPostListQueryQuery['allStrapiArticle'] {
  return {
    __typename: 'StrapiArticleConnection',
    edges: [],
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allStrapiArticle_edges(
  props: Partial<
    BlogPostListQueryQuery['allStrapiArticle']['edges'][number]
  > = {},
): BlogPostListQueryQuery['allStrapiArticle']['edges'][number] {
  return {
    __typename: 'StrapiArticleEdge',
    node: createBlogPostListQueryQueryMock_allStrapiArticle_edges_node({}),
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node(
  props: Partial<
    BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']
  > = {},
): BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'] {
  const strapiArticle = schemaFactories.createStrapiArticleMock({
    id: props.id,
    title: props.title,
    slug: props.slug,
    published_at: props.published_at,
  })
  return {
    __typename: 'StrapiArticle',
    id: strapiArticle.id,
    title: strapiArticle.title,
    slug: strapiArticle.slug,
    published_at: strapiArticle.published_at,
    parsedHeadline: null,
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_parsedHeadline(
  props: Partial<
    NonNullable<
      BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']['parsedHeadline']
    >
  > = {},
): NonNullable<
  BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']['parsedHeadline']
> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']['parsedHeadline']
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

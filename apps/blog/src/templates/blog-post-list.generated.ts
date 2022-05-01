import * as Types from '../types'

import * as schemaFactories from '../types'
export type BlogPostForListFragment = {
  __typename?: 'StrapiArticle'
  id: string
  title?: string | null
  slug?: string | null
  published_at?: any | null
  parsedHeadline?: {
    __typename?: 'RecipePart'
    childMarkdownRemark?: {
      __typename?: 'MarkdownRemark'
      html?: string | null
    } | null
  } | null
}

export type BlogPostListQueryQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogPostListQueryQuery = {
  __typename?: 'Query'
  allStrapiArticle: {
    __typename?: 'StrapiArticleConnection'
    edges: Array<{
      __typename?: 'StrapiArticleEdge'
      node: {
        __typename?: 'StrapiArticle'
        id: string
        title?: string | null
        slug?: string | null
        published_at?: any | null
        parsedHeadline?: {
          __typename?: 'RecipePart'
          childMarkdownRemark?: {
            __typename?: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
      }
    }>
  }
}

export function createBlogPostListQueryQueryMock(
  props: Partial<BlogPostListQueryQuery>,
): BlogPostListQueryQuery {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return {
        allStrapiArticle: createBlogPostListQueryQueryMock_allStrapiArticle({}),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock({ ...props, __typename: 'Query' })
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle(
  props: Partial<BlogPostListQueryQuery['allStrapiArticle']>,
): BlogPostListQueryQuery['allStrapiArticle'] {
  switch (props.__typename) {
    case 'StrapiArticleConnection': {
      const {} = schemaFactories.createStrapiArticleConnectionMock({})
      return { edges: [], ...props }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle({
        ...props,
        __typename: 'StrapiArticleConnection',
      })
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle_edges(
  props: Partial<BlogPostListQueryQuery['allStrapiArticle']['edges'][number]>,
): BlogPostListQueryQuery['allStrapiArticle']['edges'][number] {
  switch (props.__typename) {
    case 'StrapiArticleEdge': {
      const {} = schemaFactories.createStrapiArticleEdgeMock({})
      return {
        node: createBlogPostListQueryQueryMock_allStrapiArticle_edges_node({}),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle_edges({
        ...props,
        __typename: 'StrapiArticleEdge',
      })
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node(
  props: Partial<
    BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node']
  >,
): BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'] {
  switch (props.__typename) {
    case 'StrapiArticle': {
      const {} = schemaFactories.createStrapiArticleMock({})
      return {
        ...createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle_edges_node({
        ...props,
        __typename: 'StrapiArticle',
      })
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle(
  props: Partial<
    Extract<
      BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
      { __typename: 'StrapiArticle' }
    >
  >,
): Extract<
  BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
  { __typename: 'StrapiArticle' }
> {
  switch (props.__typename) {
    case 'StrapiArticle': {
      const { id, title, slug, published_at } =
        schemaFactories.createStrapiArticleMock({
          id: props.id,
          title: props.title,
          slug: props.slug,
          published_at: props.published_at,
        })
      return { id, title, slug, published_at, parsedHeadline: null, ...props }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle(
        { ...props, __typename: 'StrapiArticle' },
      )
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle_parsedHeadline(
  props: Partial<
    NonNull<
      Extract<
        BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
        { __typename: 'StrapiArticle' }
      >['parsedHeadline']
    >
  >,
): NonNull<
  Extract<
    BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
    { __typename: 'StrapiArticle' }
  >['parsedHeadline']
> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle_parsedHeadline(
        { ...props, __typename: 'RecipePart' },
      )
  }
}
export function createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        Extract<
          BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
          { __typename: 'StrapiArticle' }
        >['parsedHeadline']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    Extract<
      BlogPostListQueryQuery['allStrapiArticle']['edges'][number]['node'],
      { __typename: 'StrapiArticle' }
    >['parsedHeadline']
  >['childMarkdownRemark']
> {
  switch (props.__typename) {
    case 'MarkdownRemark': {
      const { html } = schemaFactories.createMarkdownRemarkMock({
        html: props.html,
      })
      return { html, ...props }
    }
    case undefined:
    default:
      return createBlogPostListQueryQueryMock_allStrapiArticle_edges_node_StrapiArticle_parsedHeadline_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}

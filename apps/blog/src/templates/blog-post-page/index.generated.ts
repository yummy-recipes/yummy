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
}

export function createUnnamed_1_QueryMock(
  props: Partial<Unnamed_1_Query>,
): Unnamed_1_Query {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return {
        ...createUnnamed_1_QueryMock_Query({}),
        strapiArticle: null,
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock({ ...props, __typename: 'Query' })
  }
}
export function createUnnamed_1_QueryMock_Query(
  props: Partial<Extract<Unnamed_1_Query, { __typename: 'Query' }>>,
): Extract<Unnamed_1_Query, { __typename: 'Query' }> {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return { site: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query({ ...props, __typename: 'Query' })
  }
}
export function createUnnamed_1_QueryMock_Query_site(
  props: Partial<
    NonNull<Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']>
  >,
): NonNull<Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']> {
  switch (props.__typename) {
    case 'Site': {
      const {} = schemaFactories.createSiteMock({})
      return { siteMetadata: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query_site({
        ...props,
        __typename: 'Site',
      })
  }
}
export function createUnnamed_1_QueryMock_Query_site_siteMetadata(
  props: Partial<
    NonNull<
      NonNull<
        Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']
      >['siteMetadata']
    >
  >,
): NonNull<
  NonNull<
    Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']
  >['siteMetadata']
> {
  switch (props.__typename) {
    case 'SiteSiteMetadata': {
      const { siteUrl } = schemaFactories.createSiteSiteMetadataMock({
        siteUrl: props.siteUrl,
      })
      return { siteUrl, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query_site_siteMetadata({
        ...props,
        __typename: 'SiteSiteMetadata',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiArticle(
  props: Partial<NonNull<Unnamed_1_Query['strapiArticle']>>,
): NonNull<Unnamed_1_Query['strapiArticle']> {
  switch (props.__typename) {
    case 'StrapiArticle': {
      const { slug, title, published_at } =
        schemaFactories.createStrapiArticleMock({
          slug: props.slug,
          title: props.title,
          published_at: props.published_at,
        })
      return {
        parsedHeadline: null,
        parsedContent: null,
        slug,
        title,
        published_at,
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiArticle({
        ...props,
        __typename: 'StrapiArticle',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiArticle_parsedHeadline(
  props: Partial<
    NonNull<NonNull<Unnamed_1_Query['strapiArticle']>['parsedHeadline']>
  >,
): NonNull<NonNull<Unnamed_1_Query['strapiArticle']>['parsedHeadline']> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiArticle_parsedHeadline({
        ...props,
        __typename: 'RecipePart',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiArticle_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<Unnamed_1_Query['strapiArticle']>['parsedHeadline']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    NonNull<Unnamed_1_Query['strapiArticle']>['parsedHeadline']
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
      return createUnnamed_1_QueryMock_strapiArticle_parsedHeadline_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiArticle_parsedContent(
  props: Partial<
    NonNull<NonNull<Unnamed_1_Query['strapiArticle']>['parsedContent']>
  >,
): NonNull<NonNull<Unnamed_1_Query['strapiArticle']>['parsedContent']> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiArticle_parsedContent({
        ...props,
        __typename: 'RecipePart',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiArticle_parsedContent_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<Unnamed_1_Query['strapiArticle']>['parsedContent']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    NonNull<Unnamed_1_Query['strapiArticle']>['parsedContent']
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
      return createUnnamed_1_QueryMock_strapiArticle_parsedContent_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}

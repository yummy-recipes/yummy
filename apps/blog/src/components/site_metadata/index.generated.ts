import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type LoadSiteMetadataQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type LoadSiteMetadataQuery = {
  __typename?: 'Query'
  site?: {
    __typename?: 'Site'
    siteMetadata?: {
      __typename?: 'SiteSiteMetadata'
      siteUrl?: string | null
    } | null
  } | null
}

export function createLoadSiteMetadataQueryMock(
  props: Partial<LoadSiteMetadataQuery>,
): LoadSiteMetadataQuery {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return { site: null, ...props }
    }
    case undefined:
    default:
      return createLoadSiteMetadataQueryMock({ ...props, __typename: 'Query' })
  }
}
export function createLoadSiteMetadataQueryMock_site(
  props: Partial<NonNull<LoadSiteMetadataQuery['site']>>,
): NonNull<LoadSiteMetadataQuery['site']> {
  switch (props.__typename) {
    case 'Site': {
      const {} = schemaFactories.createSiteMock({})
      return { siteMetadata: null, ...props }
    }
    case undefined:
    default:
      return createLoadSiteMetadataQueryMock_site({
        ...props,
        __typename: 'Site',
      })
  }
}
export function createLoadSiteMetadataQueryMock_site_siteMetadata(
  props: Partial<
    NonNull<NonNull<LoadSiteMetadataQuery['site']>['siteMetadata']>
  >,
): NonNull<NonNull<LoadSiteMetadataQuery['site']>['siteMetadata']> {
  switch (props.__typename) {
    case 'SiteSiteMetadata': {
      const { siteUrl } = schemaFactories.createSiteSiteMetadataMock({
        siteUrl: props.siteUrl,
      })
      return { siteUrl, ...props }
    }
    case undefined:
    default:
      return createLoadSiteMetadataQueryMock_site_siteMetadata({
        ...props,
        __typename: 'SiteSiteMetadata',
      })
  }
}

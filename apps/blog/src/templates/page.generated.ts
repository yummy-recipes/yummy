import * as Types from '../types'

import * as schemaFactories from '../types'
export type SiteMetadataFragment = {
  __typename: 'Query'
  site?: {
    __typename: 'Site'
    siteMetadata?: {
      __typename: 'SiteSiteMetadata'
      siteUrl?: string | null
    } | null
  } | null
}

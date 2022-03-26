import * as Types from '../../types';

export type LoadSiteMetadataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoadSiteMetadataQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', siteUrl?: string | null } | null } | null };

export function createLoadSiteMetadataQueryMock(props: Partial<LoadSiteMetadataQuery>): LoadSiteMetadataQuery {
  return {
site: {
__typename: 'Site',
  siteMetadata: {
  __typename: 'SiteSiteMetadata',
    siteUrl: null,

  },

},

    ...props,
  };
}

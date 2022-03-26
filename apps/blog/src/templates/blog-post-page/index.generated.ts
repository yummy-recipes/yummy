import * as Types from '../../types';

export type Unnamed_1_QueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type Unnamed_1_Query = { __typename?: 'Query', strapiArticle?: { __typename?: 'StrapiArticle', slug?: string | null, title?: string | null, published_at?: any | null, parsedHeadline?: { __typename?: 'RecipePart', childMarkdownRemark?: { __typename?: 'MarkdownRemark', html?: string | null } | null } | null, parsedContent?: { __typename?: 'RecipePart', childMarkdownRemark?: { __typename?: 'MarkdownRemark', html?: string | null } | null } | null } | null };

export function createQueryMock(props: Partial<Query>): Query {
  return {
strapiArticle: {
__typename: 'StrapiArticle',
  slug: null,
  title: null,
  published_at: null,
  parsedHeadline: {
  __typename: 'RecipePart',
    childMarkdownRemark: {
    __typename: 'MarkdownRemark',
      html: null,

    },

  },
  parsedContent: {
  __typename: 'RecipePart',
    childMarkdownRemark: {
    __typename: 'MarkdownRemark',
      html: null,

    },

  },

},

    ...props,
  };
}

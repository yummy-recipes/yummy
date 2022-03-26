import * as Types from '../types';

export type BlogPostForListFragment = { __typename?: 'StrapiArticle', id: string, title?: string | null, slug?: string | null, published_at?: any | null, parsedHeadline?: { __typename?: 'RecipePart', childMarkdownRemark?: { __typename?: 'MarkdownRemark', html?: string | null } | null } | null };

export type BlogPostListQueryQueryVariables = Types.Exact<{
  skip: Types.Scalars['Int'];
  limit: Types.Scalars['Int'];
}>;


export type BlogPostListQueryQuery = { __typename?: 'Query', allStrapiArticle: { __typename?: 'StrapiArticleConnection', edges: Array<{ __typename?: 'StrapiArticleEdge', node: { __typename?: 'StrapiArticle', id: string, title?: string | null, slug?: string | null, published_at?: any | null, parsedHeadline?: { __typename?: 'RecipePart', childMarkdownRemark?: { __typename?: 'MarkdownRemark', html?: string | null } | null } | null } }> } };

[object Object]
export function createBlogPostListQueryQueryMock(props: Partial<BlogPostListQueryQuery>): BlogPostListQueryQuery {
  return {
allStrapiArticle: {
__typename: 'StrapiArticleConnection',
  edges: {
  __typename: 'StrapiArticleEdge',
    node: {
    __typename: 'StrapiArticle',
      id: "",
      title: null,
      slug: null,
      published_at: null,
      parsedHeadline: {
      __typename: 'RecipePart',
        childMarkdownRemark: {
        __typename: 'MarkdownRemark',
          html: null,

        },

      },

    },

  },

},

    ...props,
  };
}

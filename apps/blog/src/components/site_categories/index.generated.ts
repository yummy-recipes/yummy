import * as Types from '../../types';

export type LoadCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoadCategoriesQuery = { __typename?: 'Query', allRecipeCategory: { __typename?: 'RecipeCategoryConnection', edges: Array<{ __typename?: 'RecipeCategoryEdge', node: { __typename?: 'RecipeCategory', name?: string | null, slug?: string | null } }> } };

export function createLoadCategoriesQueryMock(props: Partial<LoadCategoriesQuery>): LoadCategoriesQuery {
  return {
allRecipeCategory: {
__typename: 'RecipeCategoryConnection',
  edges: {
  __typename: 'RecipeCategoryEdge',
    node: {
    __typename: 'RecipeCategory',
      name: null,
      slug: null,

    },

  },

},

    ...props,
  };
}

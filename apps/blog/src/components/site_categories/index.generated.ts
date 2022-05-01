import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type LoadCategoriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type LoadCategoriesQuery = {
  __typename?: 'Query'
  allRecipeCategory: {
    __typename?: 'RecipeCategoryConnection'
    edges: Array<{
      __typename?: 'RecipeCategoryEdge'
      node: {
        __typename?: 'RecipeCategory'
        name?: string | null
        slug?: string | null
      }
    }>
  }
}

export function createLoadCategoriesQueryMock(
  props: Partial<LoadCategoriesQuery>,
): LoadCategoriesQuery {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return {
        allRecipeCategory: createLoadCategoriesQueryMock_allRecipeCategory({}),
        ...props,
      }
    }
    case undefined:
    default:
      return createLoadCategoriesQueryMock({ ...props, __typename: 'Query' })
  }
}
export function createLoadCategoriesQueryMock_allRecipeCategory(
  props: Partial<LoadCategoriesQuery['allRecipeCategory']>,
): LoadCategoriesQuery['allRecipeCategory'] {
  switch (props.__typename) {
    case 'RecipeCategoryConnection': {
      const {} = schemaFactories.createRecipeCategoryConnectionMock({})
      return { edges: [], ...props }
    }
    case undefined:
    default:
      return createLoadCategoriesQueryMock_allRecipeCategory({
        ...props,
        __typename: 'RecipeCategoryConnection',
      })
  }
}
export function createLoadCategoriesQueryMock_allRecipeCategory_edges(
  props: Partial<LoadCategoriesQuery['allRecipeCategory']['edges'][number]>,
): LoadCategoriesQuery['allRecipeCategory']['edges'][number] {
  switch (props.__typename) {
    case 'RecipeCategoryEdge': {
      const {} = schemaFactories.createRecipeCategoryEdgeMock({})
      return {
        node: createLoadCategoriesQueryMock_allRecipeCategory_edges_node({}),
        ...props,
      }
    }
    case undefined:
    default:
      return createLoadCategoriesQueryMock_allRecipeCategory_edges({
        ...props,
        __typename: 'RecipeCategoryEdge',
      })
  }
}
export function createLoadCategoriesQueryMock_allRecipeCategory_edges_node(
  props: Partial<
    LoadCategoriesQuery['allRecipeCategory']['edges'][number]['node']
  >,
): LoadCategoriesQuery['allRecipeCategory']['edges'][number]['node'] {
  switch (props.__typename) {
    case 'RecipeCategory': {
      const { name, slug } = schemaFactories.createRecipeCategoryMock({
        name: props.name,
        slug: props.slug,
      })
      return { name, slug, ...props }
    }
    case undefined:
    default:
      return createLoadCategoriesQueryMock_allRecipeCategory_edges_node({
        ...props,
        __typename: 'RecipeCategory',
      })
  }
}

import * as Types from '../types'

import * as schemaFactories from '../types'
export type BlogListByCategoryQueryQueryVariables = Types.Exact<{
  category: Types.Scalars['String']
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogListByCategoryQueryQuery = {
  __typename: 'Query'
  allStrapiRecipe: {
    __typename: 'StrapiRecipeConnection'
    edges: Array<{
      __typename: 'StrapiRecipeEdge'
      node: {
        __typename: 'StrapiRecipe'
        id: string
        title?: string | null
        slug?: string | null
        preparationTime?: number | null
        published_at?: any | null
        parsedHeadline?: {
          __typename: 'RecipePart'
          childMarkdownRemark?: {
            __typename: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
        tags?: Array<{
          __typename: 'StrapiRecipeTags'
          name?: string | null
          slug?: string | null
        } | null> | null
        category?: {
          __typename: 'StrapiRecipeCategory'
          name?: string | null
          slug?: string | null
        } | null
        cover?: {
          __typename: 'StrapiRecipeCover'
          image?: {
            __typename: 'File'
            childImageSharp?: {
              __typename: 'ImageSharp'
              fluid?: {
                __typename: 'ImageSharpFluid'
                tracedSVG?: string | null
                aspectRatio: number
                src: string
                srcSet: string
                sizes: string
              } | null
            } | null
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

export function createBlogListByCategoryQueryQueryMock(
  props: Partial<BlogListByCategoryQueryQuery> = {},
): BlogListByCategoryQueryQuery {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createBlogListByCategoryQueryQueryMock_allCategories({}),
    allStrapiRecipe: createBlogListByCategoryQueryQueryMock_allStrapiRecipe({}),
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_site(
  props: Partial<NonNullable<BlogListByCategoryQueryQuery['site']>> = {},
): NonNullable<BlogListByCategoryQueryQuery['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<
      NonNullable<BlogListByCategoryQueryQuery['site']>['siteMetadata']
    >
  > = {},
): NonNullable<
  NonNullable<BlogListByCategoryQueryQuery['site']>['siteMetadata']
> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allCategories(
  props: Partial<BlogListByCategoryQueryQuery['allRecipeCategory']> = {},
): BlogListByCategoryQueryQuery['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allCategories_edges(
  props: Partial<
    BlogListByCategoryQueryQuery['allRecipeCategory']['edges'][number]
  > = {},
): BlogListByCategoryQueryQuery['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createBlogListByCategoryQueryQueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allCategories_edges_node(
  props: Partial<
    BlogListByCategoryQueryQuery['allRecipeCategory']['edges'][number]['node']
  > = {},
): BlogListByCategoryQueryQuery['allRecipeCategory']['edges'][number]['node'] {
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

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe(
  props: Partial<BlogListByCategoryQueryQuery['allStrapiRecipe']> = {},
): BlogListByCategoryQueryQuery['allStrapiRecipe'] {
  return {
    __typename: 'StrapiRecipeConnection',
    edges: [],
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges(
  props: Partial<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]
  > = {},
): BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number] {
  return {
    __typename: 'StrapiRecipeEdge',
    node: createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node({}),
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node(
  props: Partial<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']
  > = {},
): BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'] {
  const strapiRecipe = schemaFactories.createStrapiRecipeMock({
    id: props.id,
    title: props.title,
    slug: props.slug,
    preparationTime: props.preparationTime,
    published_at: props.published_at,
  })
  return {
    __typename: 'StrapiRecipe',
    id: strapiRecipe.id,
    title: strapiRecipe.title,
    parsedHeadline: null,
    slug: strapiRecipe.slug,
    tags: null,
    category: null,
    preparationTime: strapiRecipe.preparationTime,
    published_at: strapiRecipe.published_at,
    cover: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_parsedHeadline(
  props: Partial<
    NonNullable<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
    >
  > = {},
): NonNullable<
  BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
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

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_tags(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['tags']
      >[number]
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['tags']
  >[number]
> {
  const strapiRecipeTags = schemaFactories.createStrapiRecipeTagsMock({
    name: props.name,
    slug: props.slug,
  })
  return {
    __typename: 'StrapiRecipeTags',
    name: strapiRecipeTags.name,
    slug: strapiRecipeTags.slug,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_category(
  props: Partial<
    NonNullable<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['category']
    >
  > = {},
): NonNullable<
  BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['category']
> {
  const strapiRecipeCategory = schemaFactories.createStrapiRecipeCategoryMock({
    name: props.name,
    slug: props.slug,
  })
  return {
    __typename: 'StrapiRecipeCategory',
    name: strapiRecipeCategory.name,
    slug: strapiRecipeCategory.slug,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_cover(
  props: Partial<
    NonNullable<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
    >
  > = {},
): NonNullable<
  BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
> {
  return {
    __typename: 'StrapiRecipeCover',
    image: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_cover_image(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
      >['image']
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
  >['image']
> {
  return {
    __typename: 'File',
    childImageSharp: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_cover_image_childImageSharp(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
        >['image']
      >['childImageSharp']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
    >['image']
  >['childImageSharp']
> {
  return {
    __typename: 'ImageSharp',
    fluid: null,
    ...props,
  }
}

export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_cover_image_childImageSharp_fluid(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<
            BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
          >['image']
        >['childImageSharp']
      >['fluid']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
      >['image']
    >['childImageSharp']
  >['fluid']
> {
  const imageSharpFluid = schemaFactories.createImageSharpFluidMock({
    tracedSVG: props.tracedSVG,
    aspectRatio: props.aspectRatio,
    src: props.src,
    srcSet: props.srcSet,
    sizes: props.sizes,
  })
  return {
    __typename: 'ImageSharpFluid',
    tracedSVG: imageSharpFluid.tracedSVG,
    aspectRatio: imageSharpFluid.aspectRatio,
    src: imageSharpFluid.src,
    srcSet: imageSharpFluid.srcSet,
    sizes: imageSharpFluid.sizes,
    ...props,
  }
}

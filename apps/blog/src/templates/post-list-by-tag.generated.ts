import * as Types from '../types'

import * as schemaFactories from '../types'
export type BlogListByTagQueryQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogListByTagQueryQuery = {
  __typename: 'Query'
  allStrapiRecipe: {
    __typename: 'STRAPI_RECIPEConnection'
    edges: Array<{
      __typename: 'STRAPI_RECIPEEdge'
      node: {
        __typename: 'STRAPI_RECIPE'
        id: string
        title?: string | null
        slug?: string | null
        preparationTime?: number | null
        publishedAt?: any | null
        parsedHeadline?: {
          __typename: 'RecipePart'
          childMarkdownRemark?: {
            __typename: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
        tags?: Array<{
          __typename: 'STRAPI_TAG'
          name?: string | null
          slug?: string | null
        } | null> | null
        category?: {
          __typename: 'STRAPI_CATEGORY'
          name?: string | null
          slug?: string | null
        } | null
        cover?: {
          __typename: 'STRAPI__MEDIA'
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

export function createBlogListByTagQueryQueryMock(
  props: Partial<BlogListByTagQueryQuery> = {},
): BlogListByTagQueryQuery {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createBlogListByTagQueryQueryMock_allCategories({}),
    allStrapiRecipe: createBlogListByTagQueryQueryMock_allStrapiRecipe({}),
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_site(
  props: Partial<NonNullable<BlogListByTagQueryQuery['site']>> = {},
): NonNullable<BlogListByTagQueryQuery['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<NonNullable<BlogListByTagQueryQuery['site']>['siteMetadata']>
  > = {},
): NonNullable<NonNullable<BlogListByTagQueryQuery['site']>['siteMetadata']> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allCategories(
  props: Partial<BlogListByTagQueryQuery['allRecipeCategory']> = {},
): BlogListByTagQueryQuery['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allCategories_edges(
  props: Partial<
    BlogListByTagQueryQuery['allRecipeCategory']['edges'][number]
  > = {},
): BlogListByTagQueryQuery['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createBlogListByTagQueryQueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allCategories_edges_node(
  props: Partial<
    BlogListByTagQueryQuery['allRecipeCategory']['edges'][number]['node']
  > = {},
): BlogListByTagQueryQuery['allRecipeCategory']['edges'][number]['node'] {
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

export function createBlogListByTagQueryQueryMock_allStrapiRecipe(
  props: Partial<BlogListByTagQueryQuery['allStrapiRecipe']> = {},
): BlogListByTagQueryQuery['allStrapiRecipe'] {
  return {
    __typename: 'STRAPI_RECIPEConnection',
    edges: [],
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges(
  props: Partial<
    BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]
  > = {},
): BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number] {
  return {
    __typename: 'STRAPI_RECIPEEdge',
    node: createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node({}),
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node(
  props: Partial<
    BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']
  > = {},
): BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node'] {
  const strapiRecipe = schemaFactories.createStrapi_RecipeMock({
    id: props.id,
    title: props.title,
    slug: props.slug,
    preparationTime: props.preparationTime,
    publishedAt: props.publishedAt,
  })
  return {
    __typename: 'STRAPI_RECIPE',
    id: strapiRecipe.id,
    title: strapiRecipe.title,
    parsedHeadline: null,
    slug: strapiRecipe.slug,
    tags: null,
    category: null,
    preparationTime: strapiRecipe.preparationTime,
    publishedAt: strapiRecipe.publishedAt,
    cover: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_parsedHeadline(
  props: Partial<
    NonNullable<
      BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
    >
  > = {},
): NonNullable<
  BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['parsedHeadline']
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

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_tags(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['tags']
      >[number]
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['tags']
  >[number]
> {
  const strapiTag = schemaFactories.createStrapi_TagMock({
    name: props.name,
    slug: props.slug,
  })
  return {
    __typename: 'STRAPI_TAG',
    name: strapiTag.name,
    slug: strapiTag.slug,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_category(
  props: Partial<
    NonNullable<
      BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['category']
    >
  > = {},
): NonNullable<
  BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['category']
> {
  const strapiCategory = schemaFactories.createStrapi_CategoryMock({
    name: props.name,
    slug: props.slug,
  })
  return {
    __typename: 'STRAPI_CATEGORY',
    name: strapiCategory.name,
    slug: strapiCategory.slug,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_cover(
  props: Partial<
    NonNullable<
      BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
    >
  > = {},
): NonNullable<
  BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
> {
  return {
    __typename: 'STRAPI__MEDIA',
    image: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_cover_image(
  props: Partial<
    NonNullable<
      NonNullable<
        BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
      >['image']
    >
  > = {},
): NonNullable<
  NonNullable<
    BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
  >['image']
> {
  return {
    __typename: 'File',
    childImageSharp: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_cover_image_childImageSharp(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
        >['image']
      >['childImageSharp']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
    >['image']
  >['childImageSharp']
> {
  return {
    __typename: 'ImageSharp',
    fluid: null,
    ...props,
  }
}

export function createBlogListByTagQueryQueryMock_allStrapiRecipe_edges_node_cover_image_childImageSharp_fluid(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<
            BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
          >['image']
        >['childImageSharp']
      >['fluid']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        BlogListByTagQueryQuery['allStrapiRecipe']['edges'][number]['node']['cover']
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

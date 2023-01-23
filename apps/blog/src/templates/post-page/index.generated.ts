import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type PostQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type PostQuery = {
  __typename: 'Query'
  strapiRecipe?: {
    __typename: 'STRAPI_RECIPE'
    slug?: string | null
    title?: string | null
    preparationTime?: number | null
    publishedAt?: any | null
    seo?: {
      __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTION'
      htmlTitle?: string | null
      htmlDescription?: string | null
    } | null
    parsedHeadline?: {
      __typename: 'RecipePart'
      childMarkdownRemark?: {
        __typename: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
    parsedDirections?: {
      __typename: 'RecipePart'
      childMarkdownRemark?: {
        __typename: 'MarkdownRemark'
        html?: string | null
      } | null
    } | null
    parsedIngredients?: {
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
    gallery?: Array<{
      __typename: 'STRAPI__MEDIA'
      image?: {
        __typename: 'File'
        childImageSharp?: {
          __typename: 'ImageSharp'
          small?: {
            __typename: 'ImageSharpFluid'
            tracedSVG?: string | null
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
          } | null
          large?: {
            __typename: 'ImageSharpFluid'
            tracedSVG?: string | null
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
          } | null
        } | null
      } | null
    } | null> | null
    category?: {
      __typename: 'STRAPI_CATEGORY'
      name?: string | null
      slug?: string | null
    } | null
  } | null
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

export function createPostQueryMock(props: Partial<PostQuery> = {}): PostQuery {
  return {
    __typename: 'Query',
    site: null,
    allCategories: createPostQueryMock_allCategories({}),
    strapiRecipe: null,
    ...props,
  }
}

export function createPostQueryMock_site(
  props: Partial<NonNullable<PostQuery['site']>> = {},
): NonNullable<PostQuery['site']> {
  return {
    __typename: 'Site',
    siteMetadata: null,
    ...props,
  }
}

export function createPostQueryMock_site_siteMetadata(
  props: Partial<
    NonNullable<NonNullable<PostQuery['site']>['siteMetadata']>
  > = {},
): NonNullable<NonNullable<PostQuery['site']>['siteMetadata']> {
  const siteSiteMetadata = schemaFactories.createSiteSiteMetadataMock({
    siteUrl: props.siteUrl,
  })
  return {
    __typename: 'SiteSiteMetadata',
    siteUrl: siteSiteMetadata.siteUrl,
    ...props,
  }
}

export function createPostQueryMock_allCategories(
  props: Partial<PostQuery['allRecipeCategory']> = {},
): PostQuery['allRecipeCategory'] {
  return {
    __typename: 'RecipeCategoryConnection',
    edges: [],
    ...props,
  }
}

export function createPostQueryMock_allCategories_edges(
  props: Partial<PostQuery['allRecipeCategory']['edges'][number]> = {},
): PostQuery['allRecipeCategory']['edges'][number] {
  return {
    __typename: 'RecipeCategoryEdge',
    node: createPostQueryMock_allCategories_edges_node({}),
    ...props,
  }
}

export function createPostQueryMock_allCategories_edges_node(
  props: Partial<PostQuery['allRecipeCategory']['edges'][number]['node']> = {},
): PostQuery['allRecipeCategory']['edges'][number]['node'] {
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

export function createPostQueryMock_strapiRecipe(
  props: Partial<NonNullable<PostQuery['strapiRecipe']>> = {},
): NonNullable<PostQuery['strapiRecipe']> {
  const strapiRecipe = schemaFactories.createStrapi_RecipeMock({
    slug: props.slug,
    title: props.title,
    preparationTime: props.preparationTime,
    publishedAt: props.publishedAt,
  })
  return {
    __typename: 'STRAPI_RECIPE',
    seo: null,
    parsedHeadline: null,
    parsedDirections: null,
    parsedIngredients: null,
    slug: strapiRecipe.slug,
    title: strapiRecipe.title,
    tags: null,
    cover: null,
    gallery: null,
    preparationTime: strapiRecipe.preparationTime,
    category: null,
    publishedAt: strapiRecipe.publishedAt,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_seo(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['seo']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['seo']> {
  const strapiComponentSeoDescription =
    schemaFactories.createStrapi__Component_Seo_DescriptionMock({
      htmlTitle: props.htmlTitle,
      htmlDescription: props.htmlDescription,
    })
  return {
    __typename: 'STRAPI__COMPONENT_SEO_DESCRIPTION',
    htmlTitle: strapiComponentSeoDescription.htmlTitle,
    htmlDescription: strapiComponentSeoDescription.htmlDescription,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_parsedHeadline(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedHeadline']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedHeadline']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<PostQuery['strapiRecipe']>['parsedHeadline']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<PostQuery['strapiRecipe']>['parsedHeadline']
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

export function createPostQueryMock_strapiRecipe_parsedDirections(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedDirections']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedDirections']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_parsedDirections_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<PostQuery['strapiRecipe']>['parsedDirections']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<PostQuery['strapiRecipe']>['parsedDirections']
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

export function createPostQueryMock_strapiRecipe_parsedIngredients(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedIngredients']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['parsedIngredients']> {
  return {
    __typename: 'RecipePart',
    childMarkdownRemark: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_parsedIngredients_childMarkdownRemark(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<PostQuery['strapiRecipe']>['parsedIngredients']
      >['childMarkdownRemark']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<PostQuery['strapiRecipe']>['parsedIngredients']
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

export function createPostQueryMock_strapiRecipe_tags(
  props: Partial<
    NonNullable<
      NonNullable<NonNullable<PostQuery['strapiRecipe']>['tags']>[number]
    >
  > = {},
): NonNullable<
  NonNullable<NonNullable<PostQuery['strapiRecipe']>['tags']>[number]
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

export function createPostQueryMock_strapiRecipe_cover(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']> {
  return {
    __typename: 'STRAPI__MEDIA',
    image: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_cover_image(
  props: Partial<
    NonNullable<
      NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
    >
  > = {},
): NonNullable<
  NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
> {
  return {
    __typename: 'File',
    childImageSharp: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_cover_image_childImageSharp(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
      >['childImageSharp']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
  >['childImageSharp']
> {
  return {
    __typename: 'ImageSharp',
    fluid: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_cover_image_childImageSharp_fluid(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
        >['childImageSharp']
      >['fluid']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<NonNullable<PostQuery['strapiRecipe']>['cover']>['image']
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

export function createPostQueryMock_strapiRecipe_gallery(
  props: Partial<
    NonNullable<
      NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
    >
  > = {},
): NonNullable<
  NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
> {
  return {
    __typename: 'STRAPI__MEDIA',
    image: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_gallery_image(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
      >['image']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
  >['image']
> {
  return {
    __typename: 'File',
    childImageSharp: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_gallery_image_childImageSharp(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
        >['image']
      >['childImageSharp']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
    >['image']
  >['childImageSharp']
> {
  return {
    __typename: 'ImageSharp',
    small: null,
    large: null,
    ...props,
  }
}

export function createPostQueryMock_strapiRecipe_gallery_image_childImageSharp_small(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<
            NonNullable<
              NonNullable<PostQuery['strapiRecipe']>['gallery']
            >[number]
          >['image']
        >['childImageSharp']
      >['fluid']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
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

export function createPostQueryMock_strapiRecipe_gallery_image_childImageSharp_large(
  props: Partial<
    NonNullable<
      NonNullable<
        NonNullable<
          NonNullable<
            NonNullable<
              NonNullable<PostQuery['strapiRecipe']>['gallery']
            >[number]
          >['image']
        >['childImageSharp']
      >['fluid']
    >
  > = {},
): NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        NonNullable<NonNullable<PostQuery['strapiRecipe']>['gallery']>[number]
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

export function createPostQueryMock_strapiRecipe_category(
  props: Partial<
    NonNullable<NonNullable<PostQuery['strapiRecipe']>['category']>
  > = {},
): NonNullable<NonNullable<PostQuery['strapiRecipe']>['category']> {
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

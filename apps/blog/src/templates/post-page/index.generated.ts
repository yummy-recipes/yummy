import * as Types from '../../types'

import * as schemaFactories from '../../types'
export type Unnamed_1_QueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type Unnamed_1_Query = {
  __typename: 'Query'
  strapiRecipe?: {
    __typename: 'StrapiRecipe'
    slug?: string | null
    title?: string | null
    preparationTime?: number | null
    published_at?: any | null
    seo?: {
      __typename: 'StrapiRecipeSeo'
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
      __typename: 'StrapiRecipeTags'
      name?: string | null
      slug?: string | null
    } | null> | null
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
    gallery?: Array<{
      __typename: 'StrapiRecipeGallery'
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
      __typename: 'StrapiRecipeCategory'
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
}

export function createUnnamed_1_QueryMock(
  props: Partial<Unnamed_1_Query>,
): Unnamed_1_Query {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return {
        ...createUnnamed_1_QueryMock_Query({}),
        strapiRecipe: null,
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock({ ...props, __typename: 'Query' })
  }
}
export function createUnnamed_1_QueryMock_Query(
  props: Partial<Extract<Unnamed_1_Query, { __typename: 'Query' }>>,
): Extract<Unnamed_1_Query, { __typename: 'Query' }> {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return { site: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query({ ...props, __typename: 'Query' })
  }
}
export function createUnnamed_1_QueryMock_Query_site(
  props: Partial<
    NonNull<Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']>
  >,
): NonNull<Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']> {
  switch (props.__typename) {
    case 'Site': {
      const {} = schemaFactories.createSiteMock({})
      return { siteMetadata: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query_site({
        ...props,
        __typename: 'Site',
      })
  }
}
export function createUnnamed_1_QueryMock_Query_site_siteMetadata(
  props: Partial<
    NonNull<
      NonNull<
        Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']
      >['siteMetadata']
    >
  >,
): NonNull<
  NonNull<
    Extract<Unnamed_1_Query, { __typename: 'Query' }>['site']
  >['siteMetadata']
> {
  switch (props.__typename) {
    case 'SiteSiteMetadata': {
      const { siteUrl } = schemaFactories.createSiteSiteMetadataMock({
        siteUrl: props.siteUrl,
      })
      return { siteUrl, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_Query_site_siteMetadata({
        ...props,
        __typename: 'SiteSiteMetadata',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe(
  props: Partial<NonNull<Unnamed_1_Query['strapiRecipe']>>,
): NonNull<Unnamed_1_Query['strapiRecipe']> {
  switch (props.__typename) {
    case 'StrapiRecipe': {
      const { slug, title, preparationTime, published_at } =
        schemaFactories.createStrapiRecipeMock({
          slug: props.slug,
          title: props.title,
          preparationTime: props.preparationTime,
          published_at: props.published_at,
        })
      return {
        seo: null,
        parsedHeadline: null,
        parsedDirections: null,
        parsedIngredients: null,
        slug,
        title,
        tags: null,
        cover: null,
        gallery: null,
        preparationTime,
        category: null,
        published_at,
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe({
        ...props,
        __typename: 'StrapiRecipe',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_seo(
  props: Partial<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['seo']>>,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['seo']> {
  switch (props.__typename) {
    case 'StrapiRecipeSeo': {
      const { htmlTitle, htmlDescription } =
        schemaFactories.createStrapiRecipeSeoMock({
          htmlTitle: props.htmlTitle,
          htmlDescription: props.htmlDescription,
        })
      return { htmlTitle, htmlDescription, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_seo({
        ...props,
        __typename: 'StrapiRecipeSeo',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedHeadline(
  props: Partial<
    NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedHeadline']>
  >,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedHeadline']> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedHeadline({
        ...props,
        __typename: 'RecipePart',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<Unnamed_1_Query['strapiRecipe']>['parsedHeadline']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    NonNull<Unnamed_1_Query['strapiRecipe']>['parsedHeadline']
  >['childMarkdownRemark']
> {
  switch (props.__typename) {
    case 'MarkdownRemark': {
      const { html } = schemaFactories.createMarkdownRemarkMock({
        html: props.html,
      })
      return { html, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedHeadline_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedDirections(
  props: Partial<
    NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedDirections']>
  >,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedDirections']> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedDirections({
        ...props,
        __typename: 'RecipePart',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedDirections_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<Unnamed_1_Query['strapiRecipe']>['parsedDirections']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    NonNull<Unnamed_1_Query['strapiRecipe']>['parsedDirections']
  >['childMarkdownRemark']
> {
  switch (props.__typename) {
    case 'MarkdownRemark': {
      const { html } = schemaFactories.createMarkdownRemarkMock({
        html: props.html,
      })
      return { html, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedDirections_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedIngredients(
  props: Partial<
    NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedIngredients']>
  >,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['parsedIngredients']> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedIngredients({
        ...props,
        __typename: 'RecipePart',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_parsedIngredients_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<Unnamed_1_Query['strapiRecipe']>['parsedIngredients']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    NonNull<Unnamed_1_Query['strapiRecipe']>['parsedIngredients']
  >['childMarkdownRemark']
> {
  switch (props.__typename) {
    case 'MarkdownRemark': {
      const { html } = schemaFactories.createMarkdownRemarkMock({
        html: props.html,
      })
      return { html, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_parsedIngredients_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_tags(
  props: Partial<
    NonNull<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['tags']>[number]>
  >,
): NonNull<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['tags']>[number]> {
  switch (props.__typename) {
    case 'StrapiRecipeTags': {
      const { name, slug } = schemaFactories.createStrapiRecipeTagsMock({
        name: props.name,
        slug: props.slug,
      })
      return { name, slug, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_tags({
        ...props,
        __typename: 'StrapiRecipeTags',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_cover(
  props: Partial<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>>,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']> {
  switch (props.__typename) {
    case 'StrapiRecipeCover': {
      const {} = schemaFactories.createStrapiRecipeCoverMock({})
      return { image: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_cover({
        ...props,
        __typename: 'StrapiRecipeCover',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_cover_image(
  props: Partial<
    NonNull<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']>
  >,
): NonNull<
  NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
> {
  switch (props.__typename) {
    case 'File': {
      const {} = schemaFactories.createFileMock({})
      return { childImageSharp: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_cover_image({
        ...props,
        __typename: 'File',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
      >['childImageSharp']
    >
  >,
): NonNull<
  NonNull<
    NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
  >['childImageSharp']
> {
  switch (props.__typename) {
    case 'ImageSharp': {
      const {} = schemaFactories.createImageSharpMock({})
      return { fluid: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp(
        { ...props, __typename: 'ImageSharp' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp_fluid(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
        >['childImageSharp']
      >['fluid']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
    >['childImageSharp']
  >['fluid']
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const {} = schemaFactories.createImageSharpFluidMock({})
      return {
        ...createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp_fluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
  props: Partial<
    Extract<
      NonNull<
        NonNull<
          NonNull<
            NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
          >['childImageSharp']
        >['fluid']
      >,
      { __typename: 'ImageSharpFluid' }
    >
  >,
): Extract<
  NonNull<
    NonNull<
      NonNull<
        NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['cover']>['image']
      >['childImageSharp']
    >['fluid']
  >,
  { __typename: 'ImageSharpFluid' }
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const { tracedSVG, aspectRatio, src, srcSet, sizes } =
        schemaFactories.createImageSharpFluidMock({
          tracedSVG: props.tracedSVG,
          aspectRatio: props.aspectRatio,
          src: props.src,
          srcSet: props.srcSet,
          sizes: props.sizes,
        })
      return { tracedSVG, aspectRatio, src, srcSet, sizes, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery(
  props: Partial<
    NonNull<
      NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
    >
  >,
): NonNull<
  NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
> {
  switch (props.__typename) {
    case 'StrapiRecipeGallery': {
      const {} = schemaFactories.createStrapiRecipeGalleryMock({})
      return { image: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery({
        ...props,
        __typename: 'StrapiRecipeGallery',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
      >['image']
    >
  >,
): NonNull<
  NonNull<
    NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
  >['image']
> {
  switch (props.__typename) {
    case 'File': {
      const {} = schemaFactories.createFileMock({})
      return { childImageSharp: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image({
        ...props,
        __typename: 'File',
      })
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
        >['image']
      >['childImageSharp']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
    >['image']
  >['childImageSharp']
> {
  switch (props.__typename) {
    case 'ImageSharp': {
      const {} = schemaFactories.createImageSharpMock({})
      return { small: null, large: null, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp(
        { ...props, __typename: 'ImageSharp' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_small(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          NonNull<
            NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
          >['image']
        >['childImageSharp']
      >['small']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      NonNull<
        NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
      >['image']
    >['childImageSharp']
  >['small']
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const {} = schemaFactories.createImageSharpFluidMock({})
      return {
        ...createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_small_ImageSharpFluid(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_small(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_small_ImageSharpFluid(
  props: Partial<
    Extract<
      NonNull<
        NonNull<
          NonNull<
            NonNull<
              NonNull<
                NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']
              >[number]
            >['image']
          >['childImageSharp']
        >['small']
      >,
      { __typename: 'ImageSharpFluid' }
    >
  >,
): Extract<
  NonNull<
    NonNull<
      NonNull<
        NonNull<
          NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
        >['image']
      >['childImageSharp']
    >['small']
  >,
  { __typename: 'ImageSharpFluid' }
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const { tracedSVG, aspectRatio, src, srcSet, sizes } =
        schemaFactories.createImageSharpFluidMock({
          tracedSVG: props.tracedSVG,
          aspectRatio: props.aspectRatio,
          src: props.src,
          srcSet: props.srcSet,
          sizes: props.sizes,
        })
      return { tracedSVG, aspectRatio, src, srcSet, sizes, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_small_ImageSharpFluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_large(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          NonNull<
            NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
          >['image']
        >['childImageSharp']
      >['large']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      NonNull<
        NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
      >['image']
    >['childImageSharp']
  >['large']
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const {} = schemaFactories.createImageSharpFluidMock({})
      return {
        ...createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_large_ImageSharpFluid(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_large(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_large_ImageSharpFluid(
  props: Partial<
    Extract<
      NonNull<
        NonNull<
          NonNull<
            NonNull<
              NonNull<
                NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']
              >[number]
            >['image']
          >['childImageSharp']
        >['large']
      >,
      { __typename: 'ImageSharpFluid' }
    >
  >,
): Extract<
  NonNull<
    NonNull<
      NonNull<
        NonNull<
          NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['gallery']>[number]
        >['image']
      >['childImageSharp']
    >['large']
  >,
  { __typename: 'ImageSharpFluid' }
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const { tracedSVG, aspectRatio, src, srcSet, sizes } =
        schemaFactories.createImageSharpFluidMock({
          tracedSVG: props.tracedSVG,
          aspectRatio: props.aspectRatio,
          src: props.src,
          srcSet: props.srcSet,
          sizes: props.sizes,
        })
      return { tracedSVG, aspectRatio, src, srcSet, sizes, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_gallery_image_childImageSharp_large_ImageSharpFluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createUnnamed_1_QueryMock_strapiRecipe_category(
  props: Partial<NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['category']>>,
): NonNull<NonNull<Unnamed_1_Query['strapiRecipe']>['category']> {
  switch (props.__typename) {
    case 'StrapiRecipeCategory': {
      const { name, slug } = schemaFactories.createStrapiRecipeCategoryMock({
        name: props.name,
        slug: props.slug,
      })
      return { name, slug, ...props }
    }
    case undefined:
    default:
      return createUnnamed_1_QueryMock_strapiRecipe_category({
        ...props,
        __typename: 'StrapiRecipeCategory',
      })
  }
}

import * as Types from '../types'

import * as schemaFactories from '../types'
export type BlogListByCategoryQueryQueryVariables = Types.Exact<{
  category: Types.Scalars['String']
  skip: Types.Scalars['Int']
  limit: Types.Scalars['Int']
}>

export type BlogListByCategoryQueryQuery = {
  __typename?: 'Query'
  allStrapiRecipe: {
    __typename?: 'StrapiRecipeConnection'
    edges: Array<{
      __typename?: 'StrapiRecipeEdge'
      node: {
        __typename?: 'StrapiRecipe'
        id: string
        title?: string | null
        slug?: string | null
        preparationTime?: number | null
        published_at?: any | null
        parsedHeadline?: {
          __typename?: 'RecipePart'
          childMarkdownRemark?: {
            __typename?: 'MarkdownRemark'
            html?: string | null
          } | null
        } | null
        tags?: Array<{
          __typename?: 'StrapiRecipeTags'
          name?: string | null
          slug?: string | null
        } | null> | null
        category?: {
          __typename?: 'StrapiRecipeCategory'
          name?: string | null
          slug?: string | null
        } | null
        cover?: {
          __typename?: 'StrapiRecipeCover'
          image?: {
            __typename?: 'File'
            childImageSharp?: {
              __typename?: 'ImageSharp'
              fluid?: {
                __typename?: 'ImageSharpFluid'
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
}

export function createBlogListByCategoryQueryQueryMock(
  props: Partial<BlogListByCategoryQueryQuery>,
): BlogListByCategoryQueryQuery {
  switch (props.__typename) {
    case 'Query': {
      const {} = schemaFactories.createQueryMock({})
      return {
        allStrapiRecipe: createBlogListByCategoryQueryQueryMock_allStrapiRecipe(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock({
        ...props,
        __typename: 'Query',
      })
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe(
  props: Partial<BlogListByCategoryQueryQuery['allStrapiRecipe']>,
): BlogListByCategoryQueryQuery['allStrapiRecipe'] {
  switch (props.__typename) {
    case 'StrapiRecipeConnection': {
      const {} = schemaFactories.createStrapiRecipeConnectionMock({})
      return { edges: [], ...props }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe({
        ...props,
        __typename: 'StrapiRecipeConnection',
      })
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges(
  props: Partial<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]
  >,
): BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number] {
  switch (props.__typename) {
    case 'StrapiRecipeEdge': {
      const {} = schemaFactories.createStrapiRecipeEdgeMock({})
      return {
        node: createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges({
        ...props,
        __typename: 'StrapiRecipeEdge',
      })
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node(
  props: Partial<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node']
  >,
): BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'] {
  switch (props.__typename) {
    case 'StrapiRecipe': {
      const {} = schemaFactories.createStrapiRecipeMock({})
      return {
        ...createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node({
        ...props,
        __typename: 'StrapiRecipe',
      })
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe(
  props: Partial<
    Extract<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
      { __typename: 'StrapiRecipe' }
    >
  >,
): Extract<
  BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
  { __typename: 'StrapiRecipe' }
> {
  switch (props.__typename) {
    case 'StrapiRecipe': {
      const { id, title, slug, preparationTime, published_at } =
        schemaFactories.createStrapiRecipeMock({
          id: props.id,
          title: props.title,
          slug: props.slug,
          preparationTime: props.preparationTime,
          published_at: props.published_at,
        })
      return {
        id,
        title,
        parsedHeadline: null,
        slug,
        tags: null,
        category: null,
        preparationTime,
        published_at,
        cover: null,
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe(
        { ...props, __typename: 'StrapiRecipe' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline(
  props: Partial<
    NonNull<
      Extract<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
        { __typename: 'StrapiRecipe' }
      >['parsedHeadline']
    >
  >,
): NonNull<
  Extract<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
    { __typename: 'StrapiRecipe' }
  >['parsedHeadline']
> {
  switch (props.__typename) {
    case 'RecipePart': {
      const {} = schemaFactories.createRecipePartMock({})
      return { childMarkdownRemark: null, ...props }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline(
        { ...props, __typename: 'RecipePart' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline_childMarkdownRemark(
  props: Partial<
    NonNull<
      NonNull<
        Extract<
          BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
          { __typename: 'StrapiRecipe' }
        >['parsedHeadline']
      >['childMarkdownRemark']
    >
  >,
): NonNull<
  NonNull<
    Extract<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
      { __typename: 'StrapiRecipe' }
    >['parsedHeadline']
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
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_parsedHeadline_childMarkdownRemark(
        { ...props, __typename: 'MarkdownRemark' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_tags(
  props: Partial<
    NonNull<
      NonNull<
        Extract<
          BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
          { __typename: 'StrapiRecipe' }
        >['tags']
      >[number]
    >
  >,
): NonNull<
  NonNull<
    Extract<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
      { __typename: 'StrapiRecipe' }
    >['tags']
  >[number]
> {
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
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_tags(
        { ...props, __typename: 'StrapiRecipeTags' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_category(
  props: Partial<
    NonNull<
      Extract<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
        { __typename: 'StrapiRecipe' }
      >['category']
    >
  >,
): NonNull<
  Extract<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
    { __typename: 'StrapiRecipe' }
  >['category']
> {
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
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_category(
        { ...props, __typename: 'StrapiRecipeCategory' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover(
  props: Partial<
    NonNull<
      Extract<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
        { __typename: 'StrapiRecipe' }
      >['cover']
    >
  >,
): NonNull<
  Extract<
    BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
    { __typename: 'StrapiRecipe' }
  >['cover']
> {
  switch (props.__typename) {
    case 'StrapiRecipeCover': {
      const {} = schemaFactories.createStrapiRecipeCoverMock({})
      return { image: null, ...props }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover(
        { ...props, __typename: 'StrapiRecipeCover' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image(
  props: Partial<
    NonNull<
      NonNull<
        Extract<
          BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
          { __typename: 'StrapiRecipe' }
        >['cover']
      >['image']
    >
  >,
): NonNull<
  NonNull<
    Extract<
      BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
      { __typename: 'StrapiRecipe' }
    >['cover']
  >['image']
> {
  switch (props.__typename) {
    case 'File': {
      const {} = schemaFactories.createFileMock({})
      return { childImageSharp: null, ...props }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image(
        { ...props, __typename: 'File' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          Extract<
            BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
            { __typename: 'StrapiRecipe' }
          >['cover']
        >['image']
      >['childImageSharp']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      Extract<
        BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
        { __typename: 'StrapiRecipe' }
      >['cover']
    >['image']
  >['childImageSharp']
> {
  switch (props.__typename) {
    case 'ImageSharp': {
      const {} = schemaFactories.createImageSharpMock({})
      return { fluid: null, ...props }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp(
        { ...props, __typename: 'ImageSharp' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp_fluid(
  props: Partial<
    NonNull<
      NonNull<
        NonNull<
          NonNull<
            Extract<
              BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
              { __typename: 'StrapiRecipe' }
            >['cover']
          >['image']
        >['childImageSharp']
      >['fluid']
    >
  >,
): NonNull<
  NonNull<
    NonNull<
      NonNull<
        Extract<
          BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
          { __typename: 'StrapiRecipe' }
        >['cover']
      >['image']
    >['childImageSharp']
  >['fluid']
> {
  switch (props.__typename) {
    case 'ImageSharpFluid': {
      const {} = schemaFactories.createImageSharpFluidMock({})
      return {
        ...createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
          {},
        ),
        ...props,
      }
    }
    case undefined:
    default:
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp_fluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}
export function createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
  props: Partial<
    Extract<
      NonNull<
        NonNull<
          NonNull<
            NonNull<
              Extract<
                BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
                { __typename: 'StrapiRecipe' }
              >['cover']
            >['image']
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
        NonNull<
          Extract<
            BlogListByCategoryQueryQuery['allStrapiRecipe']['edges'][number]['node'],
            { __typename: 'StrapiRecipe' }
          >['cover']
        >['image']
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
      return createBlogListByCategoryQueryQueryMock_allStrapiRecipe_edges_node_StrapiRecipe_cover_image_childImageSharp_fluid_ImageSharpFluid(
        { ...props, __typename: 'ImageSharpFluid' },
      )
  }
}

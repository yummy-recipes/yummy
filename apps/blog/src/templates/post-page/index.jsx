import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import TimeToPrepare from '../../components/time_to_prepare'
import Breadcrumbs from '../../components/breadcrumbs'
import * as pageStyles from '../page.module.css'
import Page from '../page'
import Tag from '../../components/tag'
import Gallery from '../../components/gallery'

export default function PostPage({ data }) {
  const { strapiRecipe: recipe } = data

  const tags = (recipe.tags || []).map((tag) => {
    return <Tag name={tag.name} key={tag.slug} className="mb-4 mr-2" />
  })

  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Page siteUrl={siteUrl}>
      <div className={pageStyles.layout}>
        <Helmet>
          <title>{recipe.seo.htmlTitle || recipe.title}</title>
          <meta
            name="description"
            content={recipe.seo.htmlDescription || recipe.title}
          />
          {recipe.cover && (
            <meta
              property="og:image"
              content={siteUrl + recipe.cover.image.childImageSharp.fluid.src}
            />
          )}
          <meta property="og:type" content="article" />
          <meta property="article:section" content={recipe.category.name} />
          {(recipe.tags || []).map((tag, index) => (
            <meta property="article:tag" content={tag.name} key={index} />
          ))}
        </Helmet>

        <section className={pageStyles.main}>
          <article className="mt-2">
            <h1 className="text-5xl">{recipe.title}</h1>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: recipe.parsedHeadline.childMarkdownRemark.html,
              }}
            ></div>

            {recipe.cover && (
              <Img
                fluid={recipe.cover.image.childImageSharp.fluid}
                alt={'Photography of the food from the recipe.'}
                className="h-[300px] md:h-[500px]"
              />
            )}

            <div className="mt-2">
              <div className="flex items-baseline justify-between mb-2">
                <Breadcrumbs
                  subsectionName={recipe.category.name}
                  subsectionSlug={recipe.category.slug}
                />
                <TimeToPrepare>{recipe.preparationTime}</TimeToPrepare>
              </div>

              <div className="mb-4">{tags}</div>
            </div>

            <div className="flex pt-5 pb-4 flex-col md:flex-row md:py-5">
              <div
                className="flex-1 min-w-[250px] md:pr-6 md:border-r md:border-gray-300"
                dangerouslySetInnerHTML={{
                  __html: recipe.parsedIngredients.childMarkdownRemark.html,
                }}
              />
              <div
                className="flex-[3] mt-5 md:mt-0 md:pl-6"
                dangerouslySetInnerHTML={{
                  __html: recipe.parsedDirections.childMarkdownRemark.html,
                }}
              />
            </div>
            <Gallery images={recipe.gallery.map(({ image }) => image)} />
          </article>
        </section>
      </div>
    </Page>
  )
}

export const pageQuery = graphql`
  query post($slug: String!) {
    ...siteMetadata
    ...allCategories

    strapiRecipe(slug: { eq: $slug }) {
      seo {
        htmlTitle
        htmlDescription
      }
      parsedHeadline {
        childMarkdownRemark {
          html
        }
      }
      parsedDirections {
        childMarkdownRemark {
          html
        }
      }
      parsedIngredients {
        childMarkdownRemark {
          html
        }
      }
      slug
      title
      tags {
        name
        slug
      }
      cover {
        image {
          childImageSharp {
            fluid(maxWidth: 2000, traceSVG: { color: "#e98500" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      gallery {
        image {
          childImageSharp {
            small: fluid(maxWidth: 500, traceSVG: { color: "#e98500" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
            large: fluid(maxWidth: 5000, traceSVG: { color: "#e98500" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      preparationTime
      category {
        name
        slug
      }
      published_at(formatString: "D MMM YYYY", locale: "pl")
    }
  }
`

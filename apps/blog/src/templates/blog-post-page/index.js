import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Page from '../page'
import Breadcrumbs from '../../components/breadcrumbs'

import SiteMetadata from '../../components/site_metadata'

import * as pageStyles from '../page.module.css'
import * as postStyles from './blog-post.module.css'

export default function BlogPostPage({ data }) {
  const { strapiArticle: post } = data

  // TODO: should it be setting all of this meta data? Some of it lives within the Page element itself
  return (
    <Page siteUrl={data.site.siteMetadata.siteUrl}>
      <div className={pageStyles.layout}>
        <SiteMetadata
          render={({ siteUrl }) => (
            <Helmet>
              <title>{post.html_title}</title>
              <meta name="description" content={post.html_title} />
              {/*<meta property='og:image' content={siteUrl + post.featured_image.childImageSharp.fluid.src} />*/}
              <meta property="og:type" content="article" />
              <meta property="article:section" content="blog" />
              {/*{(recipe.tags || []).map((tag, index) => <meta property='article:tag' content={tag} key={index}/>)}*/}
            </Helmet>
          )}
        />

        <section className={pageStyles.main}>
          <article className={postStyles.post}>
            <div className={postStyles.postIntro}>
              <div className={postStyles.postNavigation}>
                <Breadcrumbs subsectionName="blog" subsectionSlug="blog" />
              </div>

              <h1 className={postStyles.postTitle}>{post.title}</h1>

              {/*TODO: can be a component since it's used on both pages*/}
              <span className={postStyles.datePublished}>
                {post.published_at}
              </span>

              <div
                className={postStyles.postHeadline}
                dangerouslySetInnerHTML={{
                  __html: post.parsedHeadline.childMarkdownRemark.html,
                }}
              ></div>
            </div>
            <div className={postStyles.postBody}>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.parsedContent.childMarkdownRemark.html,
                }}
              ></div>
            </div>
          </article>
        </section>
      </div>
    </Page>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    ...siteMetadata
    ...allCategories

    strapiArticle(slug: { eq: $slug }) {
      parsedHeadline {
        childMarkdownRemark {
          html
        }
      }
      parsedContent {
        childMarkdownRemark {
          html
        }
      }
      slug
      title
      published_at(formatString: "D MMM YYYY", locale: "pl")
    }
  }
`

const { JSDOM } = require('jsdom')

const localPlugins = [
  '@yummy/gatsby-categories',
  '@yummy/gatsby-recipes',
  '@yummy/gatsby-posts',
  '@yummy/gatsby-pages',
  '@yummy/gatsby-search-data',
]

const sourcePlugins = [
  {
    resolve: 'gatsby-source-strapi',
    options: {
      apiURL: process.env.API_URL || 'http://localhost:1337',
      collectionTypes: ['recipe', 'category', 'tag', 'article'],
      singleTypes: [],
      queryLimit: 1000,
      loginData: {
        identifier: process.env.API_USER_EMAIL || '',
        password: process.env.API_USER_PASSWORD || '',
      },
    },
  },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    options: {
      analyzerPort: 3005,
      openAnalyzer: false,
    },
  },
]

const dynamicPlugins = localPlugins.concat(sourcePlugins)

module.exports = {
  siteMetadata: {
    title: 'Yummy',
    description:
      'Searchable repository of recipes we frequently use and are yummy.',
    siteUrl: 'https://kuchnia-yummy.pl',
    author: 'J. M. Derks',
  },
  plugins: dynamicPlugins.concat([
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- more -->',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiRecipe } }) => {
              return allStrapiRecipe.edges.map((edge) => {
                return {
                  title: edge.node.title,
                  description: JSDOM.fragment(
                    edge.node.parsedHeadline.childMarkdownRemark.html,
                  ).textContent,
                  date: edge.node.published_at,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                }
              })
            },
            query: `
            {
              allStrapiRecipe(
                limit: 1000,
                sort: { order: DESC, fields: [published_at] }
              ) {
                edges {
                  node {
                    parsedHeadline {
                      childMarkdownRemark {
                        html
                      }
                    }
                    slug
                    title
                    published_at
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Yummy RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yummy',
        short_name: 'Yummy',
        start_url: '/',
        background_color: '#ec973b',
        theme_color: '#ec973b',
        display: 'standalone',
        icon: 'src/components/layout/assets/android-chrome-192x192.png',
      },
    },
    'gatsby-plugin-eslint',
  ]),
}

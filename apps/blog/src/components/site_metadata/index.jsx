import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function SiteMetadata({render}) {
  return <StaticQuery query={graphql`
    query LoadSiteMetadata{ site {
      siteMetadata {
        siteUrl
      }
    } }
  `} render={data => render(data.site.siteMetadata)}
  />
}

import Img from 'gatsby-image'
import React from 'react'

const PostCardCover = ({ fluid, criticalImage }) => {
  return (
    <div className="relative overflow-hidden h-[200px]">
      <Img
        fluid={fluid}
        className="h-[200px] grow-0 shrink-0 basis-1/2"
        critical={criticalImage}
      />
    </div>
  )
}

export default PostCardCover

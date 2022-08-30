import React from 'react'

const PostCardHeader = ({ title, html }) => {
  return (
    <div className="text-lg mt-4 mr-4">
      <h2 className="text-lg text-black no-underline my-2 font-medium">
        {title}
      </h2>
      <div className="my-4" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}

export default PostCardHeader

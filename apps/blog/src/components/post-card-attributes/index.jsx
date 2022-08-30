import React from 'react'
import TimeToPrepare from '../time_to_prepare'
import VegetarianMark from '../icons/VegetarianMark'

const PostCardAttributes = ({ preparationTime, tags }) => (
  <div className="flex py-2 px-4">
    <TimeToPrepare>{preparationTime}</TimeToPrepare>
    {tags.indexOf('wegetariańskie') !== -1 && (
      <VegetarianMark className="w-4 h-4 ml-2" />
    )}
  </div>
)

export default PostCardAttributes

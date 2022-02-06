import React from 'react'
import TimeToPrepare from '../time_to_prepare'
import VegetarianMark from '../icons/VegetarianMark'
import * as styles from './post-card-attributes.module.css'

const PostCardAttributes = ({ preparationTime, tags }) => (
  <div className={styles.attributes}>
    <TimeToPrepare>{preparationTime}</TimeToPrepare>
    {
      tags.indexOf('wegetariańskie') !== -1
      && <VegetarianMark className={styles.vegetarianIcon} />
    }
  </div>
)

export default PostCardAttributes

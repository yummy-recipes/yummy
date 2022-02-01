import React from 'react'

import Gallery from '../components/gallery'

const images = [
  {
    'childImageSharp':{
      'fluid':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'},
      'large':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'},
      'small':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'},
    }
  },
  {
    'childImageSharp':{
      'fluid':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'},
      'large':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'},
      'small':{'aspectRatio':0.75,'src':'https://raw.githubusercontent.com/yummy-recipes/yummy/master/apps/blog/cypress/fixtures/images/cover.jpg','sizes':'(max-width: 500px) 100vw, 500px'}
    }
  }
]

export default {
  title: 'Gallery',
  component: Gallery
}

export const Primary = () => <Gallery images={images}/>
export const SingleImage = () => <Gallery images={images.slice(0, 1)}/>


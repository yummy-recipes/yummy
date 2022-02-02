import React from 'react'

import Navbar from '../components/navbar'

const categories = [
  {name: 'Category1', slug: 'category1'},
  {name: 'Category2', slug: 'category2'},
  {name: 'Category3', slug: 'category3'}
]

const BackgroundDecorator = storyFn => <div style={{backgroundColor: '#e98500'}}>{storyFn()}</div>

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    BackgroundDecorator
  ]
}

export const Primary = () => <Navbar categories={categories} />

export const WithHomepageLink = () => <Navbar categories={categories} hasHomepageLink={true}/>


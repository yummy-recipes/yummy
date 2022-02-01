import React from 'react'
import Header from '../components/header'

const categories = [
  {name: 'Category1', slug: 'category1'},
  {name: 'Category2', slug: 'category2'}
]

export default {
  title: 'Header',
  component: Header
}

export const FullHeader = () =>  <Header categories={categories} fullVersion={true} />
export const WithSubsection = () => <Header categories={categories} fullVersion={false} subsection='obiady' />
export const ForRecipe = () => <Header categories={categories} fullVersion={false} isSingleRecipe={true} />

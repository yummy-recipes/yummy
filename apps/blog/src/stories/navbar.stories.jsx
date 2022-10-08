import React from 'react'

import Navbar from '../components/navbar'

const categories = [
  { name: 'Category1', slug: 'category1' },
  { name: 'Category2', slug: 'category2' },
  { name: 'Category3', slug: 'category3' },
]

export default {
  title: 'Navbar',
  component: Navbar,
}

export const Primary = () => <Navbar categories={categories} />

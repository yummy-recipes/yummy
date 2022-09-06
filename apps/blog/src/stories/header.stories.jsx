import React from 'react'
import Header from '../components/header'

const categories = [
  { name: 'Category1', slug: 'category1' },
  { name: 'Category2', slug: 'category2' },
]

export default {
  title: 'Header',
  component: Header,
}

export const Default = () => <Header categories={categories} />
export const WithSubsection = () => (
  <Header categories={categories} subsection="obiady" />
)

import React from 'react'
import Layout from './src/components/layout'
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => {
  const {
    pageContext: {
      fullHeaderVersion,
      subsection,
      isSingleRecipe,
      allCategories,
    },
  } = props

  if (props.custom404) {
    return element
  }

  return (
    <Layout
      fullHeaderVersion={fullHeaderVersion}
      subsection={subsection}
      isSingleRecipe={isSingleRecipe}
      categories={allCategories}
    >
      {element}
    </Layout>
  )
}

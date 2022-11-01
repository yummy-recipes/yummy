import React, { useState, useEffect } from 'react'
import Header from '../header'
import Footer from '../footer'
import Searchbar from '../searchbar'

import './layout.css'

const HeaderWithCategories = ({
  fullVersion,
  subsection,
  isSingleRecipe,
  categories,
}) => {
  const [alreadyMounted, setAlreadyMounted] = useState(false)

  useEffect(() => {
    setAlreadyMounted(true)
  }, [setAlreadyMounted])

  return (
    <Header
      categories={categories}
      fullVersion={fullVersion}
      subsection={subsection}
    >
      {isSingleRecipe ? null : (
        <Searchbar
          forceVisibility={alreadyMounted}
          className="max-w-lg mx-auto px-2 mt-3 mb-6"
        />
      )}
    </Header>
  )
}

export default function Layout({
  children,
  fullHeaderVersion,
  subsection,
  isSingleRecipe,
  categories,
}) {
  return (
    <div>
      <HeaderWithCategories
        categories={categories}
        fullVersion={fullHeaderVersion}
        subsection={subsection}
        isSingleRecipe={isSingleRecipe}
      />

      {children}

      <Footer />
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import Header from '../header'
import Footer from '../footer'
import SiteCategories from '../site_categories'
import Searchbar from '../searchbar'

import './layout.css'
import * as styles from './layout.module.css'

const HeaderWithCategories = ({fullVersion, subsection, isSingleRecipe}) => {
  const [alreadyMounted, setAlreadyMounted] = useState(false)

  useEffect(() => {
    setAlreadyMounted(true)
  }, [setAlreadyMounted])

  return (
    <SiteCategories render={categories =>
      <Header
        categories={categories}
        fullVersion={fullVersion}
        subsection={subsection}
      >
        {isSingleRecipe ? null : <Searchbar forceVisibility={alreadyMounted} className={styles.searchbar}/>}
      </Header>
    }/>
  )
}

export default function Layout({children, fullHeaderVersion, subsection, isSingleRecipe}) {
  return (
    <div>
      <HeaderWithCategories
        fullVersion={fullHeaderVersion}
        subsection={subsection}
        isSingleRecipe={isSingleRecipe}
      />

      {children}

      <Footer />
    </div>
  )
}

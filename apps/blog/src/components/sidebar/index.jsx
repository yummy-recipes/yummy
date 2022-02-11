import React from 'react'
import GreenLogo from '../icons/LogoGreen'
import TagCloud from '../tag_cloud'
import * as styles from './sidebar.module.css'

export default function Sidebar({className}) {
  return <section className={className}>
    <GreenLogo className={styles.logo}/>
    <TagCloud />
  </section>
}

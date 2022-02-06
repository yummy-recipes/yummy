import React from 'react'
import * as styles from './footer.module.css'

export default function Footer({className}) {
  return <footer className={[styles.footer, className].join(' ')}>
    <div className={styles.inner}>
      © 2018-2022 J. M. Derks
    </div>
  </footer>
}

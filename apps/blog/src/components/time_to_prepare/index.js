import React from 'react'
import Timer from '../icons/Timer'
import * as styles from './time_to_prepare.module.sass'

export default function TimeToPrepare({children}) {
  return <span className={styles.timeBox}><Timer className={styles.icon}/>{children}min</span>
}

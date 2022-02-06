import React from 'react'

import * as transparent from '../components/button/button.transparent.module.css'
import * as transparentNoBorder from '../components/button/button.transparent-noborder.module.css'

export default {
  title: 'Button'
}

export const Transparent = () => <button className={transparent.button}>Action</button>

export const TransparentNoBorder = () => <button className={transparentNoBorder.button}>Action</button>

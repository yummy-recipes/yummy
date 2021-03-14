import React from 'react'
import { storiesOf } from '@storybook/react'

import * as transparent from '../components/button/button.transparent.module.sass'
import * as transparentNoBorder from '../components/button/button.transparent-noborder.module.sass'

storiesOf('Button', module)
  .add('transparent', () => (
    <button className={transparent.button}>Action</button>
  ))
  .add('transparent-noborder', () => (
    <button className={transparentNoBorder.button}>Action</button>
  ))

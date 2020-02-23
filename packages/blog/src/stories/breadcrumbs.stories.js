import React from 'react'
import { storiesOf } from '@storybook/react'

import { Breadcrumbs } from '@yummy/components'

storiesOf('Breadcrumbs', module)
  .add('default', () => (
    <Breadcrumbs subsectionName="desery" subsectionSlug="desery" />
  ))

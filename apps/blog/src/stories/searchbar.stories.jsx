import React from 'react'

import Searchbar from '../components/searchbar'

export default {
  title: 'Searchbar',
  component: Searchbar,
}

export const Primary = ({ visible }) => (visible ? <Searchbar /> : <div />)
Primary.args = {
  visible: true,
}

import React from 'react'
import { Link } from 'gatsby'
import slugify from 'underscore.string/slugify'
import titleize from 'underscore.string/titleize'
import Button from '../../components/button'

export default function Tag({ name, className }) {
  const slug = slugify(name)
  const label = titleize(name)

  return (
    <Button as={Button} to={'/tag/' + slug} className={className}>
      {label}
    </Button>
  )
}

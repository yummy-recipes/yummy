import React from 'react'
import { Link } from 'gatsby'
import Logo from '../icons/LogoSimple'

function List({ children }) {
  return <ol className="list-none ml-4 flex items-center">{children}</ol>
}

function Item({ children }) {
  return (
    <li className='inline-block uppercase whitespace-nowrap m-0 before:content-["/"] before:px-1 first:before:hidden text-gray-400 dark:text-gray-200'>
      {children}
    </li>
  )
}

function BreadcrumbLink({ to, children }) {
  return (
    <Link
      to={to}
      className="no-underline hover:underline active:text-gray-300 dark:active:text-gray-100"
    >
      {children}
    </Link>
  )
}

export default function Breadcrumbs({ subsectionName, subsectionSlug }) {
  return (
    <List>
      <Item>
        <BreadcrumbLink to="/">
          <span className="hidden sm:block">Strona Główna</span>
          <span className="sm:hidden">
            <Logo className="h-5" />
          </span>
        </BreadcrumbLink>
      </Item>
      <Item>
        <BreadcrumbLink to={`/${subsectionSlug}`}>
          {subsectionName}
        </BreadcrumbLink>
      </Item>
    </List>
  )
}

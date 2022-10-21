import React from 'react'
import { Link } from 'gatsby'
import { calculatePages } from '../../utils/paginationHelper'
import { paginationElementTypes } from '../../utils/paginationConsts'
import Button from '../button'
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'

const removeTrailingSlash = (path) => path.replace(/\/$/, '')
const removePageNumberSegment = (path) => path.replace(/\/strony\/\d+$/, '')

const toSubsectionPath = (path) => {
  const newPath = removeTrailingSlash(path)
  const subsectionPath = removePageNumberSegment(newPath)

  return subsectionPath === '' ? '/' : subsectionPath
}

const generatePagePath = (subsectionPath, pageNumber) => {
  if (pageNumber === 1) {
    return subsectionPath
  }

  if (subsectionPath === '/') {
    return `/strony/${pageNumber}`
  }

  return `${subsectionPath}/strony/${pageNumber}`
}

function PaginationLinkElement({
  elementType,
  pageNumber,
  subsectionPath,
  elementIndex,
}) {
  const listItemStyles = [
    'inline py-1 list-none',
    ...(elementType === paginationElementTypes.CURRENT_PAGE
      ? ['font-medium']
      : []),
  ].join(' ')

  const testId =
    elementType === paginationElementTypes.CURRENT_PAGE
      ? 'current_page'
      : undefined

  let elementContent
  switch (elementType) {
    case paginationElementTypes.PAGE:
      elementContent = (
        <Link
          className="text-blue-500 no-underline"
          to={generatePagePath(subsectionPath, pageNumber)}
        >
          {pageNumber}
        </Link>
      )
      break
    case paginationElementTypes.CURRENT_PAGE:
      elementContent = pageNumber
      break
    case paginationElementTypes.SEPARATOR:
      elementContent = '\u2026'
      break
    default:
      elementContent = null
      break
  }

  const elementKey =
    elementType !== paginationElementTypes.SEPARATOR
      ? `page-${pageNumber}`
      : `ellipsis-${elementIndex}`

  return (
    <li className={listItemStyles} key={elementKey} data-testid={testId}>
      {elementContent}
    </li>
  )
}

export default function Paginator({ currentPage, totalPages, currentPath }) {
  const subsectionPath = toSubsectionPath(currentPath)
  const nextPagePath = generatePagePath(subsectionPath, currentPage + 1)
  const prevPagePath = generatePagePath(subsectionPath, currentPage - 1)

  const pages = calculatePages(2, 2, currentPage, totalPages).map((p, ndx) => {
    return (
      <PaginationLinkElement
        elementType={p.type}
        pageNumber={p.pageNumber}
        subsectionPath={subsectionPath}
        elementIndex={ndx}
        key={ndx}
      />
    )
  })

  if (pages.length === 0) {
    return null
  }

  return (
    <nav className="text-center mb-2 flex">
      {currentPage > 1 && (
        <Button as={Link} to={prevPagePath} className="mb-2">
          <ChevronLeft className="h-3 align-baseline mx-1" />
          <span className="hidden md:block">Poprzednia</span>
        </Button>
      )}

      <ol className="text-xs px-3 py-2 w-full m-0">{pages}</ol>

      {currentPage < totalPages && (
        <Button as={Link} to={nextPagePath} className="mb-2">
          <span className="hidden md:block">Następna</span>
          <ChevronRight className="h-3 align-baseline mx-1" />
        </Button>
      )}
    </nav>
  )
}

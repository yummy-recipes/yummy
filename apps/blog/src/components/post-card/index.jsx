import React from 'react'
import { Link } from 'gatsby'

export default function PostCard({ href, className, children }) {
  return (
    <Link
      to={href}
      className={[
        'bg-white text-black flex flex-col overflow-hidden no-underline',
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

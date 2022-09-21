import React from 'react'

export default function Footer({ className }) {
  return (
    <footer
      className={['py-6 mt-6 md:mt-8 font-semibold border-t', className].join(
        ' ',
      )}
    >
      <div className="px-4">© 2018-{new Date().getFullYear()} J. M. Derks</div>
    </footer>
  )
}

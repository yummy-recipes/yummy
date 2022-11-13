import React from 'react'

export default function Page({ children }) {
  return (
    <div className="flex flex-col max-w-[1400px] mx-auto px-1 md:px-3 md:flex-row relative">
      <section className="shrink-0 grow-0 basis-full">{children}</section>
    </div>
  )
}

import React from 'react'
import Timer from '../icons/Timer'

export default function TimeToPrepare({ children }) {
  return (
    <span className="flex items-center">
      <Timer className="h-[20px] text-black align-baseline relative mr-1" />
      {children}min
    </span>
  )
}

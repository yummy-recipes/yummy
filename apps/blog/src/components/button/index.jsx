import React from 'react'

export default function Button({ borderless, className, ...props }) {
  const { as: Cmp = 'button', ...rest } = props
  const borderColor = borderless ? 'border-transparent' : 'border-blue-500'

  return (
    <Cmp
      {...rest}
      className={[
        className,
        'inline-block text-base px-3 py-1 border-solid border-2 no-underline rounded-md text-blue-500 hover:text-white hover:bg-blue-500',
        borderColor,
      ].join(' ')}
    />
  )
}

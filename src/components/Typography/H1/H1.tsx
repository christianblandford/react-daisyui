import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H1Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H1 = ({ className, children, ...rest }: H1Props) => {
  return (
    <h1 {...rest} className={twMerge('text-4xl font-bold', className)}>
      {children}
    </h1>
  )
}

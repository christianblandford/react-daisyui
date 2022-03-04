import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H2Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H2 = ({ className, children, ...rest }: H2Props) => {
  return (
    <h2 {...rest} className={twMerge('text-3xl font-bold', className)}>
      {children}
    </h2>
  )
}

import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H1Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <h1 {...rest} className={twMerge('text-4xl font-bold', className)} ref={ref}>
        {children}
      </h1>
    )
  }
)

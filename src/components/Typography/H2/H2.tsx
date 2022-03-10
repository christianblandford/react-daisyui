import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H2Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <h2 {...rest} className={twMerge('text-3xl font-bold', className)} ref={ref}>
        {children}
      </h2>
    )
  }
)

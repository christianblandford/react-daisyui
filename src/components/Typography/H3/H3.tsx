import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H3Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <h3 {...rest} className={twMerge('text-2xl font-semibold', className)} ref={ref}>
        {children}
      </h3>
    )
  }
)

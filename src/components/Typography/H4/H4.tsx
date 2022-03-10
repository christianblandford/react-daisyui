import React from 'react'

import { twMerge } from 'tailwind-merge'

export type H4Props = {
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <h4 {...rest} className={twMerge('text-xl font-semibold', className)} ref={ref}>
        {children}
      </h4>
    )
  }
)

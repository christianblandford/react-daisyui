import React from 'react'

import clsx from 'clsx'

export type StackProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={clsx(className, 'stack')} ref={ref}>
        {children}
      </div>
    )
  }
)

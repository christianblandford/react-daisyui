import React from 'react'
import { twMerge } from 'tailwind-merge'

export type StatActionsProps = {
  className?: string
  children?: React.ReactNode
}

export const StatActions = React.forwardRef<HTMLDivElement, StatActionsProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={twMerge(className, 'stat-actions')} ref={ref}>
        {children}
      </div>
    )
  }
)

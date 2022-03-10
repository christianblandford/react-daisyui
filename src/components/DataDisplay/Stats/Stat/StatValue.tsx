import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatValueProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatValue = React.forwardRef<HTMLDivElement, StatValueProps>(
  ({ className, variant, children, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={twMerge(className, 'stat-value', variant && variants[variant])}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

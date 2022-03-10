import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatTitleProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatTitle = React.forwardRef<HTMLDivElement, StatTitleProps>(
  ({ className, variant, children, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={twMerge(className, 'stat-title', variant && variants[variant])}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

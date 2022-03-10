import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatDescriptionProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatDescription = React.forwardRef<HTMLDivElement, StatDescriptionProps>(
  ({ className, variant, children, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={twMerge(className, 'stat-desc', variant && variants[variant])}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

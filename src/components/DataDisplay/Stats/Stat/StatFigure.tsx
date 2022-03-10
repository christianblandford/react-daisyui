import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatFigureProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatFigure = React.forwardRef<HTMLDivElement, StatFigureProps>(
  ({ className, variant, children, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={twMerge(className, 'stat-figure', variant && variants[variant])}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

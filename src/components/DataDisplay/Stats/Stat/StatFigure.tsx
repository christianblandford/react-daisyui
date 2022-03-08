import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatFigureProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatFigure = ({ className, variant, children, ...rest }: StatFigureProps) => {
  return (
    <div {...rest} className={twMerge(className, 'stat-figure', variant && variants[variant])}>
      {children}
    </div>
  )
}

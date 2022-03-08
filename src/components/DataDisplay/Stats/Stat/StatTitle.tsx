import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatTitleProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatTitle = ({ className, variant, children, ...rest }: StatTitleProps) => {
  return (
    <div {...rest} className={twMerge(className, 'stat-title', variant && variants[variant])}>
      {children}
    </div>
  )
}

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { variants } from './Stat'

export type StatDescriptionProps = {
  className?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
}

export const StatDescription = ({
  className,
  variant,
  children,
  ...rest
}: StatDescriptionProps) => {
  return (
    <div {...rest} className={twMerge(className, 'stat-desc', variant && variants[variant])}>
      {children}
    </div>
  )
}

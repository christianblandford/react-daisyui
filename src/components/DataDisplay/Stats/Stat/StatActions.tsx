import React from 'react'
import { twMerge } from 'tailwind-merge'

export type StatActionsProps = {
  className?: string
  children?: React.ReactNode
}

export const StatActions = ({ className, children, ...rest }: StatActionsProps) => {
  return (
    <div {...rest} className={twMerge(className, 'stat-actions')}>
      {children}
    </div>
  )
}

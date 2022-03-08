import React from 'react'
import { twMerge } from 'tailwind-merge'

export type BreadcrumbsProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Breadcrumbs = ({ className, children, ...rest }: BreadcrumbsProps) => {
  return (
    <div {...rest} className={twMerge('breadcrumbs', 'text-sm', className)}>
      <ul>{children}</ul>
    </div>
  )
}

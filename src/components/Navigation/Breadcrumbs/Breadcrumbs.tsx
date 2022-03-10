import React from 'react'
import { twMerge } from 'tailwind-merge'

export type BreadcrumbsProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={twMerge('breadcrumbs', 'text-sm', className)} ref={ref}>
        <ul>{children}</ul>
      </div>
    )
  }
)

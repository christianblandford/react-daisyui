import clsx from 'clsx'
import React from 'react'

export type CollapseContentProps = {
  children?: React.ReactNode
  className?: string
}

export const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, className }, ref) => {
    return (
      <div className={clsx(className, 'collapse-content')} ref={ref}>
        {children}
      </div>
    )
  }
)

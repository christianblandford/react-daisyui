import clsx from 'clsx'
import React, { useContext } from 'react'
import { CollapseContext } from './CollapseContext'

export type CollapseTitleProps = {
  children?: React.ReactNode
  className?: string
}

export const CollapseTitle = React.forwardRef<HTMLDivElement, CollapseTitleProps>(
  ({ children, className = 'text-xl font-medium' }, ref) => {
    const { onClick } = useContext(CollapseContext)!

    return (
      <div className={clsx(className, 'collapse-title')} onClick={onClick} ref={ref}>
        {children}
      </div>
    )
  }
)

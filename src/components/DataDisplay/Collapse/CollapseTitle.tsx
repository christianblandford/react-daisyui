import clsx from 'clsx'
import React, { useContext } from 'react'
import { CollapseContext } from './CollapseContext'

export type CollapseTitleProps = {
  children?: React.ReactNode
  className?: string
}

export const CollapseTitle = ({
  children,
  className = 'text-xl font-medium',
}: CollapseTitleProps) => {
  const { onClick } = useContext(CollapseContext)!

  return (
    <div className={clsx(className, 'collapse-title')} onClick={onClick}>
      {children}
    </div>
  )
}

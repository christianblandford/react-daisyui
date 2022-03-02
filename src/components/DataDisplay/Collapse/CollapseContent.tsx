import clsx from 'clsx'
import React from 'react'

export type CollapseContentProps = {
  children?: React.ReactNode
  className?: string
}

export const CollapseContent = ({ children, className }: CollapseContentProps) => {
  return <div className={clsx(className, 'collapse-content')}>{children}</div>
}

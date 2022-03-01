import clsx from 'clsx'
import React, { useContext, useEffect } from 'react'
import { DropdownContext } from '.'

export type DropdownContentProps = {
  children?: React.ReactNode
  className?: string
  tabIndex?: number
}

export const DropdownContent = ({
  className = 'p-2 shadow bg-base-100 rounded-box w-52',
  tabIndex = 0,
  children,
  ...rest
}: DropdownContentProps) => {
  const { isOpen, openOnHover, contentRef } = useContext(DropdownContext)!

  return (
    <div
      {...rest}
      tabIndex={tabIndex}
      className={clsx(className, 'menu dropdown-content')}
      ref={contentRef}
    >
      {children && children}
    </div>
  )
}

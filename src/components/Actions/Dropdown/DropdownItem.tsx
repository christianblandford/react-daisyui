import React from 'react'
import clsx from 'clsx'

export type DropdownItemProps = {
  children?: React.ReactNode
  className?: string
  tabIndex?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DropdownItem = ({ tabIndex, className, children, ...rest }: DropdownItemProps) => {
  return (
    <li {...rest} tabIndex={tabIndex} className={clsx(className, 'dropdown', '')}>
      {children}
    </li>
  )
}

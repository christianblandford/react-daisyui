import clsx from 'clsx'
import React, { useContext } from 'react'
import { DropdownContext } from '.'

export type DropdownItemProps = {
  onClick?: () => void
  disabled?: boolean
  bordered?: boolean
  className?: string
  hoverBordered?: boolean
  children: React.ReactNode
}

export const DropdownItem = ({
  onClick,
  disabled = false,
  className,
  bordered = false,
  hoverBordered = true,
  children,
}: DropdownItemProps) => {
  const { isOpen, toggleOpen } = useContext(DropdownContext)!

  return (
    <li
      onClick={onClick}
      className={clsx(
        disabled && 'disabled',
        bordered && 'bordered',
        hoverBordered && 'hover-bordered',
        className
      )}
    >
      <a>{children}</a>
    </li>
  )
}

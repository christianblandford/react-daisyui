import clsx from 'clsx'
import React, { useContext } from 'react'
import { DropdownContext } from '.'

export type DropdownLabelProps = {
  onClick?: () => void
  disabled?: boolean
  bordered?: boolean
  className?: string
  hoverBordered?: boolean
  tabIndex?: number
  children: React.ReactNode | String
}

export const DropdownLabel = ({
  onClick,
  disabled = false,
  className,
  bordered = false,
  hoverBordered = true,
  tabIndex = 0,
  children,
}: DropdownLabelProps) => {
  const context = useContext(DropdownContext)!
  const { labelRef, contentRef, isOpen, setIsOpen, toggleOpen, closeOnClick } = context

  // If the 'children' is just a single string, we will render it differently
  if (
    React.Children.count(children) === 1 &&
    typeof React.Children.toArray(children)[0] === 'string'
  ) {
    // Use default classname if one is not provided
    if (!className) {
      className = 'm-1 btn'
    }
    return (
      <div tabIndex={tabIndex} className={clsx(className)} ref={labelRef}>
        {children}
      </div>
    )
  }

  return (
    <div tabIndex={tabIndex} className={className}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? React.cloneElement(child, { ...context }) : child
      )}
    </div>
  )
}

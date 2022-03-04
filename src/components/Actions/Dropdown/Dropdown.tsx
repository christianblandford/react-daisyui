import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { DropdownContent } from './DropdownContent'
import { DropdownItem } from './DropdownItem'
import { DropdownLabel } from './DropdownLabel'

const verticalPositions = {
  end: 'dropdown-end',
  top: 'dropdown-top',
}

const horizonalPositions = {
  left: 'dropdown-left',
  right: 'dropdown-right',
}

export interface DropdownContextInterface {
  isOpen: boolean
  openOnHover: boolean
  closeOnClick: boolean
  closeOnContentClick: boolean
  contentRef: React.RefObject<HTMLDivElement>
  labelRef: React.RefObject<HTMLDivElement>
  setIsOpen: (value: boolean) => void
  toggleOpen: () => void
}

export const DropdownContext = React.createContext<DropdownContextInterface | null>(null)

export type DropdownProps = {
  forceOpen?: boolean
  closeOnClick?: boolean
  closeOnContentClick?: boolean
  initial?: 'open' | 'closed'
  className?: string
  top?: boolean
  end?: boolean
  left?: boolean
  right?: boolean
  children?: React.ReactNode
  openOnHover?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export const Dropdown = ({
  forceOpen = false,
  closeOnClick = true,
  closeOnContentClick = true,
  initial = 'closed',
  className,
  top,
  end,
  left,
  right,
  openOnHover = false,
  onClose,
  onOpen,
  children,
}: DropdownProps) => {
  // Throw exceptions if conflicting props for menu position
  if (left && right) {
    throw new Error('Dropdown cannot have both `left` and `right` props set.')
  }

  const [isOpen, setIsOpen] = useState(initial === 'open' || forceOpen)

  // Call onClose when closed
  useEffect(() => {
    if (!isOpen && onClose) {
      onClose()
    }
  }, [isOpen, onClose])

  // Call onOpen when opened
  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  // Handle opening/closing
  const handleOpenOrClose = (newValue: boolean) => {
    // Prevent closing is forceOpen is true
    if (newValue === false && !forceOpen) {
      setIsOpen(newValue)
    }
  }

  // Create ref for contents, to handle showing/hiding
  const contentRef = React.createRef<HTMLDivElement>()
  const labelRef = React.createRef<HTMLDivElement>()

  // Handle changes to label or content refs
  useEffect(() => {
    console.log(labelRef, contentRef)
  }, [labelRef, labelRef, contentRef])

  return (
    <DropdownContext.Provider
      value={{
        isOpen: isOpen,
        openOnHover: openOnHover,
        contentRef,
        labelRef,
        closeOnClick,
        closeOnContentClick,
        toggleOpen: () => handleOpenOrClose(!isOpen),
        setIsOpen: handleOpenOrClose,
      }}
    >
      <div
        className={clsx(
          className,
          'dropdown',
          forceOpen && 'dropdown-open',
          top && 'dropdown-top',
          end && 'dropdown-end',
          left && 'dropdown-left',
          right && 'dropdown-right'
        )}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.Label = DropdownLabel
Dropdown.Content = DropdownContent
Dropdown.Item = DropdownItem

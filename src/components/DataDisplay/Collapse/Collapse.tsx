import clsx from 'clsx'
import React from 'react'
import { useState } from 'react'
import { CollapseContent } from './CollapseContent'
import { CollapseTitle } from './CollapseTitle'

export interface CollapseContextInterface {
  onClick: React.MouseEventHandler
}

export const CollapseContext = React.createContext<CollapseContextInterface | null>(null)

export type CollapseProps = {
  focusOpens?: boolean
  blurCloses?: boolean
  clickOpens?: boolean
  clickCloses?: boolean
  children?: React.ReactNode
  className?: string
  isOpen?: boolean
  forceOpen?: boolean
  forceClose?: boolean
  arrow?: boolean
  plus?: boolean
  tabIndex?: number
  onOpen?: () => void
  onClose?: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Collapse = ({
  isOpen,
  forceOpen,
  forceClose,
  arrow,
  plus,
  className,
  children,
  tabIndex = 0,
  clickOpens = true,
  clickCloses = true,
  focusOpens = true,
  blurCloses = false,
  onOpen,
  onClose,
  ...rest
}: CollapseProps) => {
  if (forceOpen && forceClose) {
    throw new Error(
      'Collapse component cannot have both forceOpen and forceClose props set to true.'
    )
  }

  const openStatus = !forceClose && (forceOpen || isOpen)
  const [stateIsOpen, setStateIsOpen] = useState(openStatus)
  const elRef = React.createRef<HTMLDivElement>()

  const handleFocus = () => {
    if (focusOpens) {
      open()
    }
  }

  const handleBlur = () => {
    if (blurCloses) {
      close()
    }
  }

  const handleClick: React.MouseEventHandler = (e) => {
    if (stateIsOpen && clickCloses) {
      close()
    } else if (!stateIsOpen && clickOpens) {
      open()
    }
  }

  // Prevent bug where a click also causes a focus, and opens and immediately shuts
  // Focus is added in handleClick above
  const handleMouseDown: React.MouseEventHandler = (e) => {
    e.preventDefault()
  }

  const open = () => {
    if (!forceClose && !stateIsOpen) {
      setStateIsOpen(true)
      onOpen && onOpen()

      elRef.current?.focus()
    }
  }

  const close = () => {
    if (!forceOpen && stateIsOpen) {
      setStateIsOpen(false)
      onClose && onClose()
    }
  }

  return (
    <CollapseContext.Provider value={{ onClick: handleClick }}>
      <div
        {...rest}
        tabIndex={tabIndex}
        className={clsx(
          className,
          'collapse',
          arrow && 'collapse-arrow',
          plus && 'collapse-plus',
          stateIsOpen ? 'collapse-open' : 'collapse-close'
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        ref={elRef}
      >
        {children}
      </div>
    </CollapseContext.Provider>
  )
}
Collapse.Title = CollapseTitle
Collapse.Content = CollapseContent

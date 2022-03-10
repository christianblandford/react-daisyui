import React, { MouseEventHandler, useEffect, useState } from 'react'
import { DropdownItem } from './DropdownItem'
import { twMerge } from 'tailwind-merge'
import { DropdownContext } from './DropdownContext'
import { DropdownTrigger } from './DropdownTrigger'
import { DropdownContent } from './DropdownContent'

import './dropdown.css'

export type DropdownProps = {
  isOpen?: boolean
  forceOpen?: boolean
  children?: React.ReactNode
  className?: string
  top?: boolean
  left?: boolean
  right?: boolean
  start?: boolean
  end?: boolean
  focusOpens?: boolean
  blurCloses?: boolean
  clickOpens?: boolean
  clickCloses?: boolean
  hoverOpens?: boolean
  disabled?: boolean
  onOpen?: () => void
  onClose?: () => void
  tabIndex?: number
}

export type DropdownOpenMethod = 'focus' | 'click' | 'hover' | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      top,
      left,
      right,
      start,
      end,
      isOpen = false,
      focusOpens = true,
      blurCloses = true,
      clickOpens = true,
      clickCloses = true,
      hoverOpens = false,
      forceOpen = false,
      disabled = false,
      className,
      children,
      onOpen,
      onClose,
      tabIndex = 0,
      ...rest
    },
    ref
  ) => {
    if ([top, left, right].filter((item) => item === true).length > 1) {
      throw new Error(
        'Dropdown: left, right, and top props are mutually exclusive, only one can be true'
      )
    }

    if (start && end) {
      throw new Error(
        'Dropdown: start and end props are mutually exclusive, both cannot be set to true'
      )
    }

    const [stateIsOpen, setStateIsOpen] = useState<boolean>(forceOpen || isOpen)
    const [openedMethod, setOpenedMethod] = useState<DropdownOpenMethod>(null)

    const contentRef = React.useRef<HTMLDivElement>()
    const triggerRef = React.useRef<any>()
    const containerRef = React.useRef<HTMLDivElement>(
      (ref as React.MutableRefObject<HTMLDivElement>)?.current
    )

    useEffect(() => {
      if (stateIsOpen) {
        console.log('State change, opening')
        triggerRef.current?.focus()
      } else {
        console.log('State change, closing')
        triggerRef.current?.blur()
      }
    }, [stateIsOpen])

    const handleFocus: React.FocusEventHandler = (e) => {
      console.log('Dropdown focused')

      if (focusOpens) {
        openDropdown('focus')
      }
    }

    const handleBlur: React.FocusEventHandler = (e) => {
      console.log('Dropdown blurred')
      handleGlobalBlur()

      if (blurCloses) {
        //closeDropdown()
      }
    }

    // If hover opens the dropdown and user hovers over, open the dropdown
    const handleMouseEnter: MouseEventHandler = (e) => {
      console.log('Dropdown mouse enter')

      if (hoverOpens && !stateIsOpen) {
        openDropdown('hover')
      }
    }

    // If the dropdown was opened by mouseEnter, close it when mouseLeaves
    const handleMouseLeave: MouseEventHandler = (e) => {
      console.log('Dropdown mouse leave')

      // Only close on mouseLeave if the dropdown was opened by a mouseEnter
      // this way, clicking/focus still works and mouse exit wont close it
      if (openedMethod === 'hover') {
        closeDropdown()
      }
    }

    const handleTriggerClick = () => {
      console.log('Trigger clicked')

      if (!disabled) {
        // If user opened dropdown by hovering, clickOpens, and then they click it, we want the dropdown to stay open
        if (stateIsOpen && clickOpens && openedMethod === 'hover') {
          setOpenedMethod('click')
        }
        // If state is open, and it was not opened by hover, and clickCloses, close the dropdown
        else if (stateIsOpen && clickCloses && openedMethod !== 'hover') {
          closeDropdown()
        }
        // If state is closed, and clickOpens, open the dropdown
        else if (!stateIsOpen && clickOpens) {
          openDropdown('click')
        }
      }

      // Any other case, do nothing
    }

    const handleContentBlur = () => {
      console.log('content blurred...')
    }

    const openDropdown = (method: DropdownOpenMethod) => {
      if (!disabled && !stateIsOpen) {
        console.log('Opening')
        setStateIsOpen(true)
        setOpenedMethod(method)

        onOpen && onOpen()
      }
    }

    const closeDropdown = () => {
      if (!disabled && stateIsOpen && !forceOpen) {
        console.log('Closing')

        setStateIsOpen(false)
        setOpenedMethod(null)

        onClose && onClose()
      }
    }

    const handleGlobalBlur = () => {
      console.log({ triggerRef, contentRef, containerRef })
      console.log({
        triggerRef: document.activeElement !== triggerRef?.current,
        triggerRefContains: !triggerRef?.current.contains(document.activeElement),
        contentRef: document.activeElement !== contentRef?.current,
        contentRefContains: !contentRef?.current.contains(document.activeElement),
        containerRef: document.activeElement !== containerRef?.current,
        containerRefContains: !containerRef?.current.contains(document.activeElement),
      })

      // If all of the below evaluate to true, the user has focused outside of the dropdown
      if (
        document.activeElement !== triggerRef?.current &&
        document.activeElement !== containerRef?.current &&
        document.activeElement !== contentRef?.current &&
        !triggerRef?.current.contains(document.activeElement) &&
        !contentRef?.current.contains(document.activeElement) &&
        !containerRef?.current.contains(document.activeElement)
      ) {
        if (blurCloses) {
          closeDropdown()
        }
      }
    }

    return (
      <DropdownContext.Provider
        value={{
          disabled,
          focusOpens,
          blurCloses,
          clickCloses,
          hoverOpens,
          forceOpen,
          contentRef,
          triggerRef,
          handleTriggerClick,
          handleContentBlur,
          handleGlobalBlur,
        }}
      >
        <div
          {...rest}
          className={twMerge(
            className,
            'react-daisyui-dropdown',
            //stateIsOpen && 'react-daisyui-dropdown-open',
            right && 'dropdown-right',
            left && 'dropdown-left',
            top && 'dropdown-top',
            start && 'dropdown-start',
            end && 'dropdown-end'
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={tabIndex}
          ref={containerRef}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    )
  }
)

const DropdownNamespace = Object.assign(Dropdown, {
  Item: DropdownItem,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
})
export { DropdownNamespace as Dropdown }

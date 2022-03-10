import React from 'react'
import { twMerge } from 'tailwind-merge'
import { DropdownContext } from './DropdownContext'

export type DropdownTriggerProps = {
  tabIndex?: number
  children: React.ReactNode
  className?: string
}

export const DropdownTrigger = ({
  tabIndex = 0,
  children,
  className,
  ...rest
}: DropdownTriggerProps) => {
  const context = React.useContext(DropdownContext)!
  const { triggerRef, handleTriggerClick, handleGlobalBlur } = context

  if (typeof children === 'string') {
    children = <div>{children}</div>
  }

  const child = React.Children.only(children)
  console.log({ type: (child as React.ReactElement).type })

  const handleClick = (e: React.MouseEvent, el: React.ReactElement) => {
    if (el.props.onClick) {
      el.props.onClick(e)
    }

    // Call the triggerClick handler in context provider
    handleTriggerClick && handleTriggerClick()
  }

  const handleMouseDown = (e: React.MouseEvent, el: React.ReactElement) => {
    if (el.props.onMouseDown) {
      el.props.onMouseDown(e)
    }

    e.preventDefault()
  }

  const handleFocus = (e: React.FocusEvent, el: React.ReactElement) => {
    if (el.props.onFocus) {
      el.props.onFocus(e)
    }

    console.log('Trigger focused')
  }

  const handleBlur = (e: React.FocusEvent, el: React.ReactElement) => {
    if (el.props.onBlur) {
      el.props.onBlur()
    }
    console.log('Trigger blurred')

    handleGlobalBlur && handleGlobalBlur()
  }

  const handleMouseEnter = (e: React.MouseEvent, el: React.ReactElement) => {
    if (el.props.onMouseEnter) {
      el.props.onMouseEnter(e)
    }
  }

  const handleMouseLeave = (e: React.MouseEvent, el: React.ReactElement) => {
    if (el.props.onMouseLeave) {
      el.props.onMouseLeave(e)
    }
  }

  const childEl = React.isValidElement(child) ? (child as React.ReactElement) : <div>{child}</div>

  const props = {
    ...rest,
    ...childEl.props,
    className: twMerge(childEl.props.className, className),
    onClick: (e: React.MouseEvent) => handleClick(e, childEl),
    onMouseDown: (e: React.MouseEvent) => handleMouseDown(e, childEl),
    onFocus: (e: React.FocusEvent) => handleFocus(e, childEl),
    onBlur: (e: React.FocusEvent) => handleBlur(e, childEl),
    onMouseEnter: (e: React.MouseEvent) => handleMouseEnter(e, childEl),
    onMouseLeave: (e: React.MouseEvent) => handleMouseLeave(e, childEl),
    tabIndex: tabIndex,
  }

  return (
    <childEl.type {...props} ref={triggerRef}>
      {childEl.props.children}
    </childEl.type>
  )
}

import React, { FocusEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'
import { DropdownContext } from './DropdownContext'

export type DropdownContentProps = {
  className?: string
  children?: React.ReactNode
  tabIndex?: number
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
}

export const DropdownContent = ({
  tabIndex = 0,
  className,
  children,
  onFocus,
  onBlur,
  ...rest
}: DropdownContentProps) => {
  const { contentRef, handleContentBlur, handleGlobalBlur } = React.useContext(DropdownContext)!

  const isSingleChild = React.Children.count(children) === 1
  const firstChild = React.Children.count(children) > 0 && React.Children.toArray(children)[0]

  // Handle focus for menu, also allowing user to provide a method for handleFocus
  const handleFocus: React.FocusEventHandler = (e) => {
    console.log('Content focused')
    onFocus && onFocus(e)
  }

  const handleBlur: FocusEventHandler = (e) => {
    console.log('Content blurred')

    //handleContentBlur && handleContentBlur()
    onBlur && onBlur(e)

    handleGlobalBlur && handleGlobalBlur()
  }

  // If a single child is passed, and it is a valid ReactElement, we will apply the necessary props to that element and use it as the base...
  if (isSingleChild && React.isValidElement(firstChild)) {
    return (
      <firstChild.type
        className={twMerge('react-daisyui-dropdown-content', className, firstChild.props.className)}
        tabIndex={firstChild.props.tabIndex ?? tabIndex}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={contentRef}
      >
        {firstChild.props.children}
      </firstChild.type>
    )
  }
  // Else, wrap the child/children in a div with the necessary props
  else {
    return (
      <div
        {...rest}
        className={twMerge('react-daisyui-dropdown-content', className)}
        tabIndex={tabIndex}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={contentRef}
      >
        {children}
      </div>
    )
  }
}

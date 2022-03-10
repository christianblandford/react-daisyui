import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { MenuItem } from './MenuItem'
import { MenuContext } from './MenuContext'

export type MenuProps = {
  children?: React.ReactNode
  className?: string
  compact?: boolean
  horizontal?: boolean
  innerClassName?: string
  borderedItems?: boolean
  borderedItemsOnHover?: boolean
  rounded?: boolean
  tabIndex?: number
  disabled?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      tabIndex = 0,
      compact,
      horizontal,
      className,
      children,
      disabled = false,
      rounded = false,
      borderedItems = false,
      borderedItemsOnHover = false,
      ...rest
    },
    ref
  ) => {
    /*
  const onlyIcons =
    React.Children.toArray(children).filter((child) =>
      React.Children.count((child as React.ReactElement).props.children)
    ).length === 0
    */

    return (
      <MenuContext.Provider
        value={{ disabled, bordered: borderedItems, borderedOnHover: borderedItemsOnHover }}
      >
        <div
          {...rest}
          tabIndex={tabIndex}
          className={twMerge(
            'bg-base-100',
            className,
            'menu',
            horizontal && 'menu-horizontal',
            compact && 'menu-compact',
            rounded && 'rounded-box'
          )}
          ref={ref}
        >
          {children}
        </div>
      </MenuContext.Provider>
    )
  }
)

const MenuNamespace = Object.assign(Menu, { Item: MenuItem })

export { MenuNamespace as Menu }

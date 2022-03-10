import React from 'react'
import { twMerge } from 'tailwind-merge'
import { MenuContext } from './MenuContext'

export type MenuItemProps = {
  bordered?: boolean
  borderedOnHover?: boolean
  active?: boolean
  className?: string
  innerClassName?: string
  innerStyle?: React.CSSProperties
  children?: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  onClick?: () => void
  tabIndex?: number
}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      bordered,
      active,
      onClick,
      children,
      className,
      innerClassName,
      innerStyle,
      borderedOnHover,
      disabled,
      icon,
      tabIndex = 0,
      ...rest
    },
    ref
  ) => {
    const handleClick: React.MouseEventHandler = () => {
      onClick && onClick()
    }

    const context = React.useContext(MenuContext)

    return (
      <li
        {...rest}
        onClick={handleClick}
        className={twMerge(
          className,
          (bordered || context.bordered) && 'bordered',
          (borderedOnHover || context.borderedOnHover) && 'hover-bordered',
          (disabled || context.disabled) && 'disabled'
        )}
        tabIndex={tabIndex}
        ref={ref}
      >
        <a className={twMerge(innerClassName, active && 'active')} style={innerStyle}>
          {icon && icon}
          {children}
        </a>
      </li>
    )
  }
)

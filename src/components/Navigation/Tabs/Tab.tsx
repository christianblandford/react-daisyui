import React from 'react'
import clsx from 'clsx'

export type TabProps = {
  title: string
  active?: boolean
  bordered?: boolean
  className?: string
  activeTabClassName?: string
  activeTabStyle?: React.CSSProperties
  style?: React.CSSProperties
  onClick?: () => void
}

export const Tab = React.forwardRef<HTMLAnchorElement, TabProps>(
  (
    {
      title,
      active,
      bordered,
      activeTabClassName,
      activeTabStyle,
      className,
      style,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        {...rest}
        className={clsx('tab', className, active && activeTabClassName, active && 'tab-active')}
        onClick={onClick}
        style={{ ...style, ...(active && activeTabStyle) }}
        ref={ref}
      >
        {title}
      </a>
    )
  }
)

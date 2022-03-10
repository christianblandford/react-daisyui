import React from 'react'
import clsx from 'clsx'

const sizes = {
  xs: 'tab-xs',
  sm: 'tab-sm',
  md: 'tab-md',
  lg: 'tab-lg',
}

export type TabsProps = {
  children?: React.ReactNode
  className?: string
  activeTabClassName?: string
  activeTabStyle?: React.CSSProperties
  activeTabIndex: number
  tabStyle?: React.CSSProperties
  tabIndex?: number
  onChange: (index: number) => void
  bordered?: boolean
  lifted?: boolean
  boxed?: boolean
  size?: keyof typeof sizes
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      onChange,
      activeTabIndex,
      activeTabClassName,
      activeTabStyle,
      className,
      children,
      bordered,
      lifted,
      boxed,
      size,
      ...rest
    },
    ref
  ) => {
    return (
      <div {...rest} className={clsx(className, 'tabs', boxed && 'tabs-boxed')} ref={ref}>
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(child as React.ReactElement, {
              ...child.props,
              active: activeTabIndex === index,
              onClick: () => onChange(index),
              activeTabClassName,
              activeTabStyle,
              className: clsx(
                child.props?.className,
                bordered && 'tab-bordered',
                lifted && 'tab-lifted',
                size && sizes[size]
              ),
            })
        )}
      </div>
    )
  }
)

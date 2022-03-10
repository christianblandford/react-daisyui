import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type StatsProps = {
  vertical?: boolean
  centered?: boolean
  children?: React.ReactNode
  className?: string
}

export const ceneteredStatClassName = 'place-items-center'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  ({ vertical, centered, className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={clsx(className, 'stats', vertical && 'stats-vertical')} ref={ref}>
        {children &&
          React.Children.map(children, (child) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                  ...child.props,
                  className: twMerge(child.props.className, centered && ceneteredStatClassName),
                })
              : child
          })}
      </div>
    )
  }
)

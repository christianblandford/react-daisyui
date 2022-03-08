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
export const Stats = ({ vertical, centered, className, children, ...rest }: StatsProps) => {
  return (
    <div {...rest} className={clsx(className, 'stats', vertical && 'stats-vertical')}>
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

import React from 'react'
import clsx from 'clsx'

export type StepsProps = {
  vertical?: boolean
  children?: React.ReactNode
  className?: string
}

export const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ vertical, className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={clsx(className, 'steps', vertical && 'steps-vertical')} ref={ref}>
        {children}
      </div>
    )
  }
)

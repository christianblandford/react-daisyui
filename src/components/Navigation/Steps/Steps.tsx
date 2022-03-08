import React from 'react'
import clsx from 'clsx'

export type StepsProps = {
  vertical?: boolean
  children?: React.ReactNode
  className?: string
}

export const Steps = ({ vertical, className, children, ...rest }: StepsProps) => {
  return (
    <div {...rest} className={clsx(className, 'steps', vertical && 'steps-vertical')}>
      {children}
    </div>
  )
}

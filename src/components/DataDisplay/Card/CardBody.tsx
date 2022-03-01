import clsx from 'clsx'
import React from 'react'

export type CardBodyProps = {
  children?: React.ReactNode
  className?: string
}

export const CardBody = ({ children, className, ...rest }: CardBodyProps) => {
  return (
    <div className={clsx(className, 'card-body')} {...rest}>
      {children}
    </div>
  )
}

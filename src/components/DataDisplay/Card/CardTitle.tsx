import clsx from 'clsx'
import React from 'react'

export type CardTitleProps = {
  children?: React.ReactNode
  className?: string
}

export const CardTitle = ({ children, className, ...rest }: CardTitleProps) => {
  return (
    <h2 className={clsx(className, 'card-title')} {...rest}>
      {children}
    </h2>
  )
}

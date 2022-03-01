import clsx from 'clsx'
import React from 'react'

export type CardActionsProps = {
  children?: React.ReactNode
  className?: string
}

export const CardActions = ({ className, children, ...rest }: CardActionsProps) => {
  return (
    <div className={clsx(className, 'card-actions')} {...rest}>
      {children}
    </div>
  )
}

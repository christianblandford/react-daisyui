import React from 'react'

import clsx from 'clsx'

import { CardActions } from './CardActions'
import { CardBody } from './CardBody'
import { CardImage } from './CardImage'
import { CardTitle } from './CardTitle'

const shadows = {
  xs: 'shadow-xs',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
}

export type CardProps = {
  bordered?: boolean
  shadow?: boolean | keyof typeof shadows
  className?: string
  children?: React.ReactNode
  compact?: boolean
}

export const Card = ({
  compact = false,
  bordered = false,
  className = 'bg-base-100 p-4',
  shadow = 'xl',
  children,
  ...rest
}: CardProps) => {
  let shadowClassName
  if (shadow === true) {
    shadowClassName = 'shadow-xl'
  } else if (typeof shadow !== 'boolean') {
    shadowClassName = shadows[shadow]
  }

  return (
    <div
      className={clsx(
        className,
        'card',
        shadowClassName,
        compact && 'compact',
        bordered && 'border'
      )}
      {...rest}
    >
      {children && children}
    </div>
  )
}

Card.Title = CardTitle
Card.Body = CardBody
Card.Image = CardImage
Card.Actions = CardActions

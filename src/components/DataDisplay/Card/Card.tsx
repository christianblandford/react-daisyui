import React from 'react'

import clsx from 'clsx'

import { shadows } from '@/const'
import { ShadowType } from '@/types'

import { CardActions } from './CardActions'
import { CardBody } from './CardBody'
import { CardImage } from './CardImage'
import { CardTitle } from './CardTitle'

export type CardProps = {
  bordered?: boolean
  shadow?: ShadowType
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

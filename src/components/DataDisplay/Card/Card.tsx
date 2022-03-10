import React from 'react'

import clsx from 'clsx'

import { twMerge } from 'tailwind-merge'

export const breakpoints = {
  xs: 'xs:card-side',
  sm: 'sm:card-side',
  md: 'md:card-side',
  lg: 'lg:card-side',
  xl: 'xl:card-side',
  '2xl': '2xl:card-side',
} as Record<string, string>

export type CardProps = {
  glass?: boolean
  layout?: 'horizontal' | 'vertical'
  title?: React.ReactNode
  bordered?: boolean
  responsive?: boolean
  className?: string
  innerClassName?: string
  children?: React.ReactNode
  compact?: boolean
  actions?: React.ReactNode
  actionsPosition?: 'start' | 'end'
  figure?: React.ReactNode
  figureOverlay?: Boolean
  figurePosition?: 'start' | 'end'
}

export const defaultClassList = ['card', 'bg-base-100']

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      glass = false,
      layout = 'vertical',
      compact = false,
      responsive = false,
      bordered = false,
      className,
      innerClassName,
      children,
      title,
      actions,
      actionsPosition = 'end',
      figure,
      figureOverlay = false,
      figurePosition = 'start',
      ...rest
    },
    ref
  ) => {
    // Define default classes to be used in the component
    const defaultClasses = {
      card: clsx(
        'card shadow-xl',
        glass ? 'glass' : 'bg-base-100',
        layout === 'vertical' && !responsive && 'w-96'
      ),
      title: 'card-title',
      actions: 'card-actions justify-end',
    }

    // Create default title element, or add card-title className to provided title element
    const titleEl = title && <div className={defaultClasses.title}>{title}</div>

    // Add card-actions className to provided actions element
    const actionsEl = actions && <div className={defaultClasses.actions}>{actions}</div>

    const figureEl = figure && <figure>{figure}</figure>

    return (
      <div
        {...rest}
        className={twMerge(
          defaultClasses.card,
          clsx(
            className,
            compact && 'compact',
            bordered && 'border',
            layout !== 'vertical' && 'card-side',
            figureOverlay && 'image-full'
          )
        )}
        ref={ref}
      >
        {figure && figurePosition === 'start' && figureEl}
        <div className={clsx('card-body', innerClassName)}>
          {actionsEl && actionsPosition === 'start' && actionsEl}
          {titleEl && titleEl}
          {children && React.isValidElement(children) ? children : <p>{children}</p>}
          {actionsEl && actionsPosition === 'end' && actionsEl}
        </div>
        {figure && figurePosition === 'end' && figureEl}
      </div>
    )
  }
)

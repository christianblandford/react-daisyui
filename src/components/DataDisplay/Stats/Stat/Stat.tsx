import React from 'react'
import clsx from 'clsx'
import { StatTitle } from './StatTitle'
import { StatValue } from './StatValue'
import { StatDescription } from './StatDescription'
import { StatFigure } from './StatFigure'
import { StatActions } from './StatActions'
import { twMerge } from 'tailwind-merge'
import { ceneteredStatClassName } from '../Stats'

export const variants = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

export type StatProps = {
  variant?: keyof typeof variants
  value?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  figure?: React.ReactNode
  actions?: React.ReactNode
  centered?: boolean
  children?: React.ReactNode
  className?: string
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  (
    { variant, value, title, description, figure, actions, centered, className, children, ...rest },
    ref
  ) => {
    console.log({
      variant,
      value,
      title,
      description,
      figure,
      actions,
      centered,
      className,
      children,
    })

    const figureEl =
      figure &&
      (React.isValidElement(figure) ? (
        React.cloneElement(figure, {
          ...(figure as React.ReactElement).props,
          className: twMerge((figure as React.ReactElement).props.className, 'stat-figure'),
        })
      ) : (
        <div className="stat-figure">{figure}</div>
      ))

    const titleEl =
      title &&
      (React.isValidElement(title) ? (
        React.cloneElement(title, {
          ...(title as React.ReactElement).props,
          className: twMerge((title as React.ReactElement).props.className, 'stat-title'),
        })
      ) : (
        <div className="stat-title">{title}</div>
      ))

    const valueEl =
      value &&
      (React.isValidElement(value) ? (
        React.cloneElement(value, {
          ...(value as React.ReactElement).props,
          className: twMerge(
            (value as React.ReactElement).props.className,
            'stat-value',
            variant && variants[variant]
          ),
        })
      ) : (
        <div className={clsx('stat-value', variant && variants[variant])}>{value}</div>
      ))

    const descEl =
      description &&
      (React.isValidElement(description) ? (
        React.cloneElement(description, {
          ...(description as React.ReactElement).props,
          className: twMerge((description as React.ReactElement).props.className, 'stat-desc'),
        })
      ) : (
        <div className="stat-desc">{description}</div>
      ))

    return (
      <div
        {...rest}
        className={clsx(className, 'stat', centered && ceneteredStatClassName)}
        ref={ref}
      >
        {figureEl}
        {titleEl}
        {valueEl}
        {descEl}

        {children}

        {actions && <div className="stat-actions">{actions}</div>}
      </div>
    )
  }
)

const StatNamespace = Object.assign(Stat, {
  Title: StatTitle,
  Value: StatValue,
  Description: StatDescription,
  Figure: StatFigure,
  Actions: StatActions,
})
export { StatNamespace as Stat }

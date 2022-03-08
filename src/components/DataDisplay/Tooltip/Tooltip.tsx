import React from 'react'
import clsx from 'clsx'

export const tooltipVariants = {
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  info: 'tooltip-info',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  error: 'tooltip-error',
}

export const tooltipPositions = {
  top: 'tooltip-top',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
}

export type TooltipProps = {
  text?: string
  forceOpen?: boolean
  variant?: keyof typeof tooltipVariants
  position?: keyof typeof tooltipPositions
  children?: React.ReactNode
  className?: string
}

export const Tooltip = ({
  text,
  variant,
  position,
  className,
  children,
  ...rest
}: TooltipProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        'tooltip',
        variant && tooltipVariants[variant],
        position && tooltipPositions[position]
      )}
      data-tip={text}
    >
      {children}
    </div>
  )
}

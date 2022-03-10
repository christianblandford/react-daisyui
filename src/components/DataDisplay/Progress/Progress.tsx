import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'progress-primary',
  secondary: 'progress-secondary',
  accent: 'progress-accent',
  info: 'progress-info',
  success: 'progress-success',
  warning: 'progress-warning',
  error: 'progress-error',
}

export type ProgressProps = {
  variant?: keyof typeof variants
  children?: React.ReactNode
  className?: string
  value: number
  max?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, children, value, max = 100, variant, ...rest }, ref) => {
    return (
      <progress
        {...rest}
        className={clsx(className, 'progress', variant && variants[variant])}
        value={value}
        max={max}
        ref={ref}
      />
    )
  }
)

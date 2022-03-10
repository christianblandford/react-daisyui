import React from 'react'
import clsx from 'clsx'

const alertVariants = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

const alertShadowOptions = {
  xs: 'shadow-xs',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

export type AlertProps = {
  variant?: keyof typeof alertVariants
  shadowDepth?: keyof typeof alertShadowOptions
  className?: string
  children?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, children, shadowDepth = 'lg', className }, ref) => {
    return (
      <div
        className={clsx(
          className,
          'alert shadow-lg',
          variant && alertVariants[variant],
          alertShadowOptions[shadowDepth]
        )}
        ref={ref}
      >
        {children && children}
      </div>
    )
  }
)

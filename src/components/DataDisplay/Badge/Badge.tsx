import React from 'react'

import clsx from 'clsx'

const iconGaps = {
  '0': 'gap-0',
  'x-0': 'gap-x-0',
  'y-0': 'gap-y-0',
  '0.5': 'gap-0.5',
  'x-0.5': 'gap-x-0.5',
  'y-0.5': 'gap-y-0.5',
  '1': 'gap-1',
  'x-1': 'gap-x-1',
  'y-1': 'gap-y-1',
  '1.5': 'gap-1.5',
  'x-1.5': 'gap-x-1.5',
  'y-1.5': 'gap-y-1.5',
  '2': 'gap-2',
  'x-2': 'gap-x-2',
  'y-2': 'gap-y-2',
  '2.5': 'gap-2.5',
  'x-2.5': 'gap-x-2.5',
  'y-2.5': 'gap-y-2.5',
  '3': 'gap-3',
  'x-3': 'gap-x-3',
  'y-3': 'gap-y-3',
  '3.5': 'gap-3.5',
  'x-3.5': 'gap-x-3.5',
  'y-3.5': 'gap-y-3.5',
  '4': 'gap-4',
  'x-4': 'gap-x-4',
  'y-4': 'gap-y-4',
  '5': 'gap-5',
  'x-5': 'gap-x-5',
  'y-5': 'gap-y-5',
  '6': 'gap-6',
  'x-6': 'gap-x-6',
  'y-6': 'gap-y-6',
  '7': 'gap-7',
  'x-7': 'gap-x-7',
  'y-7': 'gap-y-7',
  '8': 'gap-8',
}

const variants = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  ghost: 'badge-ghost',
}

const sizes = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
}

export type BadgeProps = {
  className?: string
  variant?: keyof typeof variants
  outline?: boolean
  children?: React.ReactNode
  size?: keyof typeof sizes
  icon?: React.ReactNode
  iconGap?: keyof typeof iconGaps
  iconPosition?: 'start' | 'end'
}

export const Badge = ({
  className,
  size,
  variant,
  outline = false,
  children,
  icon,
  iconGap,
  iconPosition = 'start',
  ...rest
}: BadgeProps) => {
  return (
    <div
      className={clsx(
        className,
        'badge',
        variant && variants[variant],
        size && sizes[size],
        icon && iconGap,
        outline && iconGap && iconGaps[iconGap]
      )}
      {...rest}
    >
      {icon && iconPosition === 'start' && icon}
      {children && children}
      {icon && iconPosition === 'end' && icon}
    </div>
  )
}

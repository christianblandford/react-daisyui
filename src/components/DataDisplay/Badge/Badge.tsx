import clsx from 'clsx'

import { gaps } from '@/const'
import { GapOptions } from '@/types'

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
  iconGap?: GapOptions
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
        icon && iconGap && gaps[iconGap],
        outline && 'badge-outline'
      )}
      {...rest}
    >
      {icon && iconPosition === 'start' && icon}
      {children && children}
      {icon && iconPosition === 'end' && icon}
    </div>
  )
}

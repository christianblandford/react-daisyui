import { Tooltip } from '@/components/DataDisplay'
import { ElementWithTooltipProps } from '@/types'
import clsx from 'clsx'
import React from 'react'

const sizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const shapes = {
  square: 'btn-square',
  circle: 'btn-circle',
}

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost text-base-content',
  link: 'btn-link',
  glass: 'glass',
}

export type ButtonVariant = keyof typeof variants

export type ButtonProps = ElementWithTooltipProps & {
  block?: boolean
  className?: string
  variant?: ButtonVariant
  wide?: boolean
  size?: keyof typeof sizes
  shape?: keyof typeof shapes
  isLoading?: boolean
  outline?: boolean
  active?: boolean
  noAnimation?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode | string
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
}

export const Button = ({
  block = false,
  className,
  variant,
  size = 'md',
  wide = false,
  isLoading = false,
  shape,
  noAnimation = false,
  active = false,
  outline = false,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'start',
  tooltipForceOpen,
  tooltipPosition,
  tooltipText,
  tooltipVariant,
  onClick,
  children,
}: ButtonProps) => {
  const button = (
    <button
      className={clsx(
        'btn text-white focus:outline-none',
        block && 'btn-block',
        wide && 'btn-wide',
        sizes[size],
        variant && variants[variant],
        outline && 'btn-outline',
        shape && shapes[shape],
        isLoading && 'loading',
        noAnimation && 'no-animation',
        active && 'btn-active',
        icon && 'gap-2',
        className && className
      )}
      onClick={() => !disabled && onClick && onClick()}
      disabled={disabled}
      type={type}
    >
      {icon && iconPosition === 'start' && icon}
      {children}
      {icon && iconPosition === 'end' && icon}
    </button>
  )

  if (!tooltipText) {
    return button
  } else {
    return (
      <Tooltip
        position={tooltipPosition}
        variant={tooltipVariant}
        forceOpen={tooltipForceOpen}
        text={tooltipText}
      >
        {button}
      </Tooltip>
    )
  }
}

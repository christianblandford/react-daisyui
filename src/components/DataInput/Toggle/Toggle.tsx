import React from 'react'

import clsx from 'clsx'

const variants = {
  primary: 'toggle-primary',
  secondary: 'toggle-secondary',
  accent: 'toggle-accent',
}

const sizes = {
  xs: 'toggle-xs',
  sm: 'toggle-sm',
  md: 'toggle-md',
  lg: 'toggle-lg',
}

export type ToggleProps = {
  checked: boolean
  onChange: (value: boolean) => void
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children?: React.ReactNode
  className?: string
}

export const Toggle = ({
  checked,
  onChange,
  variant,
  size,
  className,
  children,
  ...rest
}: ToggleProps) => {
  return (
    <input
      {...rest}
      type="checkbox"
      className={clsx(className, 'toggle', variant && variants[variant], size && sizes[size])}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  )
}

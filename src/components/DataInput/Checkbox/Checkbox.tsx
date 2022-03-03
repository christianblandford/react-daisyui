import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'checkbox-primary',
  secondary: 'checkbox-secondary',
  accent: 'checkbox-accent',
}

const sizes = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
}

export type CheckboxProps = {
  disabled?: boolean
  size?: keyof typeof sizes
  checked: boolean
  onChange: (checked: boolean) => void
  variant?: keyof typeof variants
  children?: React.ReactNode
  className?: string
}

export const Checkbox = ({
  size,
  variant,
  className,
  checked,
  onChange,
  disabled = false,
  ...rest
}: CheckboxProps) => {
  return (
    <input
      {...rest}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className={clsx(className, 'checkbox', variant && variants[variant], size && sizes[size])}
      disabled={disabled}
    ></input>
  )
}

import clsx from 'clsx'
import React from 'react'

const variants = {
  primary: 'radio-primary',
  secondary: 'radio-secondary',
  accent: 'radio-accent',
}

const sizes = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
}

export type RadioProps = {
  name: string
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  className?: string
  checked: boolean
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export const Radio = ({
  name,
  checked,
  onChange,
  disabled = false,
  size,
  variant,
  className,
  ...rest
}: RadioProps) => {
  return (
    <input
      {...rest}
      name={name}
      disabled={disabled}
      type="radio"
      checked={checked}
      onChange={(e) => onChange(e)}
      className={clsx(className, 'radio', variant && variants[variant], size && sizes[size])}
    />
  )
}

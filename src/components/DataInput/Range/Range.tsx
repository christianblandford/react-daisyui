import clsx from 'clsx'
import React from 'react'

const variants = {
  primary: 'range-primary',
  secondary: 'range-secondary',
  accent: 'range-accent',
}

const sizes = {
  xs: 'range-xs',
  sm: 'range-sm',
  md: 'range-md',
  lg: 'range-lg',
}

export type RangeProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  min?: number
  max?: number
  value: number
  onChange: (value: number) => void
}

export const Range = ({
  variant,
  size,
  className,
  min = 0,
  max = 100,
  value,
  onChange,
  ...rest
}: RangeProps) => {
  return (
    <input
      {...rest}
      type="range"
      className={clsx(className, 'range', variant && variants[variant], size && sizes[size])}
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        if (e.target.value && typeof e.target.value === 'string') {
          onChange(parseInt(e.target.value))
        } else {
          throw new Error('Range value cannot be undefined and must be a string')
        }
      }}
    />
  )
}

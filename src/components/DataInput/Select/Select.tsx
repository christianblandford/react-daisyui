import React from 'react'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

const variants = {
  primary: 'select-primary',
  secondary: 'select-secondary',
  accent: 'select-accent',
  info: 'select-info',
  success: 'select-success',
  warning: 'select-warning',
  error: 'select-error',
  ghost: 'select-ghost',
}

const sizes = {
  xs: 'select-xs',
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg',
}

export type SelectReturnType = {
  index: number
  value: string
}

export type SelectProps = {
  options: string[]
  value?: string
  placeholder?: string
  variant?: keyof typeof variants
  bordered?: boolean
  size?: keyof typeof sizes
  className?: string
  onChange: (value: SelectReturnType) => void
  disabled?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      disabled = false,
      placeholder,
      variant,
      bordered = false,
      size,
      className,
      ...rest
    },
    ref
  ) => {
    if (value && !options.includes(value)) {
      throw new Error('Select options array does not contain the provided value.')
    }

    // Generate keys for each option, memoize to prevent re-rendering
    const memoizedKeys = React.useMemo(() => options.map(() => nanoid()), [options])

    const valueIndex = value ? options.indexOf(value) : 'default'

    const handleChange = (stringIndex: string) => {
      const index = parseInt(stringIndex)
      onChange({ index, value: options[index] })
    }

    return (
      <select
        {...rest}
        value={valueIndex}
        onChange={(e) => handleChange(e.target.value)}
        className={clsx(
          className,
          'select',
          variant && variants[variant],
          size && sizes[size],
          bordered && 'select-bordered'
        )}
        disabled={disabled}
        ref={ref}
      >
        {placeholder && (
          <option value="default" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((item, index) => (
          <option key={memoizedKeys[index]} value={index}>
            {item}
          </option>
        ))}
      </select>
    )
  }
)

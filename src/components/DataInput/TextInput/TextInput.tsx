import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'input-primary',
  secondary: 'input-secondary',
  accent: 'input-accent',
  info: 'input-info',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error',
  ghost: 'input-ghost',
}

export type TextInputProps = {
  variant?: keyof typeof variants
  bordered?: boolean
  className?: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { variant, bordered, placeholder, className, value, onChange, disabled = false, ...rest },
    ref
  ) => {
    return (
      <input
        {...rest}
        className={clsx(
          className,
          'input',
          bordered && 'input-bordered',
          variant && variants[variant]
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
      />
    )
  }
)

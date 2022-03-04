import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'textarea-primary',
  secondary: 'textarea-secondary',
  accent: 'textarea-accent',
  info: 'textarea-info',
  success: 'textarea-success',
  warning: 'textarea-warning',
  error: 'textarea-error',
  ghost: 'textarea-ghost',
}

export type TextareaProps = {
  variant?: keyof typeof variants
  bordered?: boolean
  className?: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  disabled?: boolean
}

export const Textarea = ({
  variant,
  bordered,
  placeholder,
  className,
  value,
  onChange,
  disabled = false,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
      {...rest}
      className={clsx(
        className,
        'textarea',
        bordered && 'textarea-bordered',
        variant && variants[variant]
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

import React from 'react'
import { twMerge } from 'tailwind-merge'

export const variants = {
  primary: 'step-primary',
  secondary: 'step-secondary',
  accent: 'step-accent',
  info: 'step-info',
  success: 'step-success',
  warning: 'step-warning',
  error: 'step-error',
}

export type StepProps = {
  content?: string
  disabled?: boolean
  onClick?: () => void
  variant?: keyof typeof variants
  className?: string
  children: React.ReactNode
}

export const Step = React.forwardRef<HTMLLIElement, StepProps>(
  ({ children, content, variant, disabled, onClick, className, ...rest }, ref) => {
    const handleClick = () => {
      onClick && !disabled && onClick()
    }
    return (
      <li
        {...rest}
        onClick={handleClick}
        className={twMerge('step', variant && variants[variant], className)}
        data-content={content}
        ref={ref}
      >
        {children}
      </li>
    )
  }
)

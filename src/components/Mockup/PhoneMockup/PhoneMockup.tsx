import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  info: 'border-info',
  success: 'border-success',
  warning: 'border-warning',
  error: 'border-error',
}

export type PhoneMockupProps = {
  variant?: keyof typeof variants
  children?: React.ReactNode
  className?: string
}

export const PhoneMockup = ({ variant, className, children, ...rest }: PhoneMockupProps) => {
  return (
    <div {...rest} className={clsx(className, 'mockup-phone', variant && variants[variant])}>
      <div className="camera" />
      <div className="display">
        <div className="artboard artboard-demo phone-1">{children}</div>
      </div>
    </div>
  )
}

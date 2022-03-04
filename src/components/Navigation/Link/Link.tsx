import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'link-primary',
  secondary: 'link-secondary',
  accent: 'link-accent',
  neutral: 'link-neutral',
}

export type LinkProps = {
  variant?: keyof typeof variants
  children?: React.ReactNode
  className?: string
  hover?: boolean
}

export const Link = ({ variant, hover, className, children, ...rest }: LinkProps) => {
  return (
    <a
      {...rest}
      className={clsx(className, 'link', hover && 'link-hover', variant && variants[variant])}
    >
      {children}
    </a>
  )
}

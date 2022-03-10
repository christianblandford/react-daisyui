import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'link-primary',
  secondary: 'link-secondary',
  accent: 'link-accent',
  neutral: 'link-neutral',
}

export type LinkProps = {
  href?: string
  variant?: keyof typeof variants
  children?: React.ReactNode
  className?: string
  hover?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, variant, hover, className, children, ...rest }, ref) => {
    return (
      <a
        {...rest}
        href={href}
        className={clsx(className, 'link', hover && 'link-hover', variant && variants[variant])}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

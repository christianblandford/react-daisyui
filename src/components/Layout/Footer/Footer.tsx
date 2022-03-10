import React from 'react'
import { twMerge } from 'tailwind-merge'

export type FooterProps = {
  children?: React.ReactNode
  className?: string
  centered?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ centered, className, children, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={twMerge(
          centered && 'footer-center',
          'footer',
          'p-10 bg-neutral text-neutral-content',
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

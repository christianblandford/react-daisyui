import React from 'react'
import { twMerge } from 'tailwind-merge'

export type FooterProps = {
  children?: React.ReactNode
  className?: string
  centered?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Footer = ({ centered, className, children, ...rest }: FooterProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        centered && 'footer-center',
        'footer',
        'p-10 bg-neutral text-neutral-content',
        className
      )}
    >
      {children}
    </div>
  )
}

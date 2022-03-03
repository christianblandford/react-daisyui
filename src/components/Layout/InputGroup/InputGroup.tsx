import React from 'react'

import clsx from 'clsx'

const sizes = {
  xs: 'input-group-xs',
  sm: 'input-group-sm',
  md: 'input-group-md',
  lg: 'input-group-lg',
}

export type InputGroupProps = {
  vertical?: boolean
  size?: keyof typeof sizes
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputGroup = ({ size, vertical, className, children, ...rest }: InputGroupProps) => {
  return (
    <label
      {...rest}
      className={clsx(
        className,
        'input-group',
        vertical && 'input-group-vertical',
        size && sizes[size]
      )}
    >
      {children}
    </label>
  )
}

import React from 'react'

import clsx from 'clsx'

export type FormControlProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FormControl = ({ className, children, ...rest }: FormControlProps) => {
  return (
    <div {...rest} className={clsx(className, 'form-control')}>
      {children}
    </div>
  )
}

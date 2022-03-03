import React from 'react'

import clsx from 'clsx'

export type H2Props = {
  preserveDefaults?: boolean
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H2 = ({ className, preserveDefaults = true, children, ...rest }: H2Props) => {
  const defaultClassName = 'text-3xl font-bold'
  return (
    <h2 {...rest} className={clsx(className, preserveDefaults && defaultClassName)}>
      {children}
    </h2>
  )
}

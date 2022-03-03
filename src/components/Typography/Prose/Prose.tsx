import React from 'react'

import clsx from 'clsx'

export interface ProseProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Prose = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: ProseProps<T>) => {
  const Component = as || 'div'

  return (
    <Component {...rest} className={clsx(className, 'prose')}>
      {children}
    </Component>
  )
}

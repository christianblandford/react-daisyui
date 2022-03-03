import React from 'react'

import clsx from 'clsx'

export type AvatarGroupProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AvatarGroup = ({ className = '-space-x-6', children, ...rest }: AvatarGroupProps) => {
  return (
    <div {...rest} className={clsx(className, 'avatar-group')}>
      {children}
    </div>
  )
}

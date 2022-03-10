import React from 'react'

import clsx from 'clsx'

export type AvatarGroupProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className = '-space-x-6', children, ...rest }, ref) => {
    return (
      <div {...rest} className={clsx(className, 'avatar-group')} ref={ref}>
        {children}
      </div>
    )
  }
)

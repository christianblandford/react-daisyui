import React from 'react'

import clsx from 'clsx'

export type AvatarProps = {
  children?: React.ReactNode
  className?: string
  placeholder?: boolean
  online?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Avatar = ({ className, children, placeholder, online, ...rest }: AvatarProps) => {
  let onlineIndicatorClass
  if (online !== undefined) {
    onlineIndicatorClass = online ? 'online' : 'offline'
  }

  return (
    <div
      {...rest}
      className={clsx(
        className,
        'avatar',
        placeholder && 'placeholder',
        onlineIndicatorClass && onlineIndicatorClass
      )}
    >
      {children}
    </div>
  )
}

import React from 'react'
import clsx from 'clsx'

export const artboardSizes = {
  1: 'phone-1',
  2: 'phone-2',
  3: 'phone-3',
  4: 'phone-4',
  5: 'phone-5',
  6: 'phone-6',
}

export type ArtboardProps = {
  demo?: boolean
  children?: React.ReactNode
  className?: string
  size?: keyof typeof artboardSizes
  horizontal?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Artboard = ({
  size,
  horizontal,
  demo,
  className,
  children,
  ...rest
}: ArtboardProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        'artboard',
        size && artboardSizes[size],
        demo && 'artboard-demo',
        horizontal && 'artboard-horizontal'
      )}
    >
      {children}
    </div>
  )
}

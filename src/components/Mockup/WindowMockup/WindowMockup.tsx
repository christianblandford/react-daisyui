import React from 'react'
import clsx from 'clsx'

export type WindowMockupProps = {
  children?: React.ReactNode
  className?: string
  innerClassName?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WindowMockup = ({
  className = 'border-base-300',
  innerClassName = 'flex justify-center border-base-300',
  children,
  ...rest
}: WindowMockupProps) => {
  return (
    <div {...rest} className={clsx(className, 'mockup-window border')}>
      <div className={clsx(innerClassName, 'px-4 py-16 border-t')}>{children}</div>
    </div>
  )
}

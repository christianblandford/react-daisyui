import { masks, MaskType } from './masks'
import clsx from 'clsx'
import React from 'react'

export type MaskProps = {
  shape: MaskType
  children?: React.ReactNode
  className?: string
  wrapWithDiv?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Mask = ({ className, children, shape, wrapWithDiv = false, ...rest }: MaskProps) => {
  if (wrapWithDiv) {
    return (
      <div {...rest} className={clsx(className, 'mask', masks[shape])}>
        {children}
      </div>
    )
  }
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          ...rest,
          className: clsx(className, 'mask', masks[shape]),
        })
      )}
    </>
  )
}

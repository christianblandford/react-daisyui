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
export const Mask = React.forwardRef<HTMLDivElement, MaskProps>(
  ({ className, children, shape, wrapWithDiv = false, ...rest }, ref) => {
    if (wrapWithDiv) {
      return (
        <div {...rest} className={clsx(className, 'mask', masks[shape])} ref={ref}>
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
)

import React from 'react'
import clsx from 'clsx'

export type ModalActionProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ModalAction = ({ className, children, ...rest }: ModalActionProps) => {
  return (
    <div {...rest} className={clsx(className, 'modal-action')}>
      {children}
    </div>
  )
}

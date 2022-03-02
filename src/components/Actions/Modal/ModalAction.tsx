import clsx from 'clsx'
import { MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'

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

import clsx from 'clsx'
import React, { MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'

import { ModalAction } from './ModalAction'

export type ModalProps = {
  children?: React.ReactNode
  className?: string
  isOpen?: boolean
  showCloseButton?: boolean
  backdropClickCloses?: boolean
  allowClose?: boolean
  title?: string
  subtitle?: string
  onClose?: () => void
  style?: React.CSSProperties
  portalElement?: HTMLElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen = false,
      title,
      subtitle,
      allowClose = true,
      showCloseButton = true,
      backdropClickCloses = true,
      onClose,
      style,
      className,
      children,
      portalElement,
      ...rest
    },
    ref
  ) => {
    const handleClose = () => {
      onClose && allowClose && onClose()
    }

    const handleBackdropClick: MouseEventHandler = (e) => {
      if (e.target === e.currentTarget) {
        e.stopPropagation()
        e.preventDefault()
        if (backdropClickCloses) {
          handleClose()
        }
      }
    }

    if (isOpen) {
      return createPortal(
        <div
          {...rest}
          className={clsx(className, 'modal', 'modal-open')}
          onClick={handleBackdropClick}
          ref={ref}
        >
          <div className="modal-box">{children}</div>
        </div>,
        portalElement ?? document.body
      )
    } else {
      return null
    }
  }
)

const ModalNamespace = Object.assign(Modal, { Action: ModalAction })

export { ModalNamespace as Modal }

import { createContext } from 'react'

export interface DropdownContextInterface {
  triggerRef?: React.RefObject<any>
  contentRef?: React.RefObject<HTMLDivElement>
  disabled?: boolean
  focusOpens?: boolean
  blurCloses?: boolean
  clickCloses?: boolean
  hoverOpens?: boolean
  forceOpen?: boolean
  handleTriggerClick?: () => void
  handleContentBlur?: () => void
  handleGlobalBlur?: () => void
}

export const DropdownContext = createContext<DropdownContextInterface | null>(null)

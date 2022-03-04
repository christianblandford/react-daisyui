import React from 'react'
import clsx from 'clsx'
import { CodeMockupLine } from './CodeMockupLine'

export type CodeMockupProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CodeMockup = ({ className, children, ...rest }: CodeMockupProps) => {
  return (
    <div {...rest} className={clsx(className, 'mockup-code')}>
      {children}
    </div>
  )
}
CodeMockup.Line = CodeMockupLine

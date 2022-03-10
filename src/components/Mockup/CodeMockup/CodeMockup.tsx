import React from 'react'
import clsx from 'clsx'
import { CodeMockupLine } from './CodeMockupLine'

export type CodeMockupProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CodeMockup = React.forwardRef<HTMLDivElement, CodeMockupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div {...rest} className={clsx(className, 'mockup-code')} ref={ref}>
        {children}
      </div>
    )
  }
)

const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine })

export { CodeMockupNamespace as CodeMockup }

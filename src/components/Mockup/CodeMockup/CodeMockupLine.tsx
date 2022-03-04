import React from 'react'
import clsx from 'clsx'

export type CodeMockupLineProps = {
  prefix?: string | boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  className?: string
  innerClassName?: string
  children?: React.ReactNode
}

export const CodeMockupLine = ({
  prefix,
  success,
  warning,
  error,
  className,
  innerClassName,
  children,
  ...rest
}: CodeMockupLineProps) => {
  if ([success, warning, error].filter((item) => item === true).length > 1) {
    throw new Error(
      'MockupLine must be exactly one of [success, warning, error]. Cannot be multiple.'
    )
  }

  const props = {
    ...rest,
    className: clsx(
      className,
      success && 'bg-succss',
      warning && 'bg-warning',
      error && 'bg-error'
    ),
  } as Record<string, any>
  if (prefix !== false) {
    props['data-prefix'] = prefix || '>'
  }

  return (
    <pre {...props}>
      <code className={innerClassName}>{children}</code>
    </pre>
  )
}

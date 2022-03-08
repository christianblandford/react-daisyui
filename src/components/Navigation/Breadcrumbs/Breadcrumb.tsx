import React from 'react'

export type BreadcrumbProps = {
  children?: React.ReactNode
}

export const Breadcrumb = ({ children, ...rest }: BreadcrumbProps) => {
  return <li {...rest}>{children}</li>
}

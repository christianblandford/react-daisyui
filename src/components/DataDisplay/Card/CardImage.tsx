import React from 'react'

export const CardImage = ({ children }: { children?: React.ReactNode }) => {
  return <figure>{children && children}</figure>
}

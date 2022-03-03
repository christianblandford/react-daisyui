import React from 'react'

export interface CollapseContextInterface {
  onClick: React.MouseEventHandler
}

export const CollapseContext = React.createContext<CollapseContextInterface | null>(null)

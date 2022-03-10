import React from 'react'

export interface MenuContext {
  disabled?: boolean
  bordered?: boolean
  borderedOnHover?: boolean
}

export const MenuContext = React.createContext<MenuContext>({})

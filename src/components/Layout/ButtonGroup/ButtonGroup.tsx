import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type ButtonGroupProps = {
  activeIndex?: number
  children?: React.ReactNode
  className?: string
  onChange?: (index: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ButtonGroup = ({
  activeIndex,
  onChange,
  className,
  children,
  ...rest
}: ButtonGroupProps) => {
  const handleClick = (index: number, onClick: () => any) => {
    onChange && onChange(index)
    onClick && onClick()
  }

  return (
    <div {...rest} className={clsx(className, 'btn-group')}>
      {children &&
        React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement, {
                ...child.props,
                onClick: () => handleClick(index, child.props.onClick),
                className: twMerge(child.props.className, index === activeIndex && 'btn-active'),
              })
            : child
        )}
    </div>
  )
}

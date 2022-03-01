import clsx from 'clsx'

export type DividerProps = {
  vertical?: boolean
  horizontal?: boolean
  text?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Divider = ({ vertical, horizontal, className, text, ...rest }: DividerProps) => {
  if (horizontal && vertical) {
    throw new Error('Divider cannot be both horizontal and vertical.')
  }

  if (!horizontal && !vertical) {
    horizontal = true
  }

  return (
    <div
      {...rest}
      className={clsx(
        className,
        'divider',
        horizontal && 'divider-horizontal',
        vertical && 'divider-vertical'
      )}
    >
      {text && text}
    </div>
  )
}

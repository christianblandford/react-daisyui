import clsx from 'clsx'

export type StackProps = {
  children?: React.ReactNode
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Stack = ({ className, children, ...rest }: StackProps) => {
  return (
    <div {...rest} className={clsx(className, 'stack')}>
      {children}
    </div>
  )
}

import clsx from 'clsx'

export type H1Props = {
  preserveDefaults?: boolean
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H1 = ({ className, preserveDefaults = true, children, ...rest }: H1Props) => {
  const defaultClassName = 'text-4xl font-bold'
  return (
    <h1 {...rest} className={clsx(className, preserveDefaults && defaultClassName)}>
      {children}
    </h1>
  )
}

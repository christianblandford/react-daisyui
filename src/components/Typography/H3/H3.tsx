import clsx from 'clsx'

export type H3Props = {
  preserveDefaults?: boolean
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H3 = ({ className, preserveDefaults = true, children, ...rest }: H3Props) => {
  const defaultClassName = 'text-2xl font-semibold'
  return (
    <h3 {...rest} className={clsx(className, preserveDefaults && defaultClassName)}>
      {children}
    </h3>
  )
}

import clsx from 'clsx'

export type H4Props = {
  preserveDefaults?: boolean
  children?: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H4 = ({ className, preserveDefaults = true, children, ...rest }: H4Props) => {
  const defaultClassName = 'text-xl font-semibold'
  return (
    <h4 {...rest} className={clsx(className, preserveDefaults && defaultClassName)}>
      {children}
    </h4>
  )
}

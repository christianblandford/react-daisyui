import clsx from 'clsx'

export type FormControlLabelProps = {
  control?: React.ReactNode
  label?: string
  className?: string
  innerClassName?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FormControlLabel = ({
  className,
  innerClassName = 'cursor-pointer',
  control,
  label,
  ...rest
}: FormControlLabelProps) => {
  return (
    <label {...rest} className={clsx(className, 'label')}>
      <span className={clsx(innerClassName, 'label-text')}>{label}</span>
      {control}
    </label>
  )
}

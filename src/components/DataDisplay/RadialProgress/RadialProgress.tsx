import clsx from 'clsx'

export type RadialProgressProps = {
  value: Number
  children?: React.ReactNode
  className?: string
  showNumber?: boolean
  hidePercentSign?: boolean
  size?: string
  thickness?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RadialProgress = ({
  showNumber = true,
  hidePercentSign = false,
  thickness,
  size,
  value,
  className,
  children,
  ...rest
}: RadialProgressProps) => {
  const style = {
    '--value': value,
    ...(thickness && { '--thickness': thickness }),
    ...(size && { '--size': size }),
  } as React.CSSProperties
  return (
    <div {...rest} className={clsx(className, 'radial-progress')} style={style}>
      {showNumber && `${value}`} {showNumber && !hidePercentSign && '%'}
    </div>
  )
}

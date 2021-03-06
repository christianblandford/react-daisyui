import React from 'react'
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
export const RadialProgress = React.forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    {
      showNumber = true,
      hidePercentSign = false,
      thickness,
      size,
      value,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const style = {
      ...{ ['--value' as any]: value },
      ...(thickness && { ['--thickness' as any]: thickness }),
      ...(size && { ['--size' as any]: size }),
    } as React.CSSProperties
    return (
      <div {...rest} className={clsx(className, 'radial-progress')} style={style} ref={ref}>
        {showNumber && `${value}`} {showNumber && !hidePercentSign && '%'}
      </div>
    )
  }
)

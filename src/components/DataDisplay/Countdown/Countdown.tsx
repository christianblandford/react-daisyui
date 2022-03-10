import clsx from 'clsx'
import * as React from 'react'
import { CountdownValueType } from './CountdownValueType'
export type CountdownProps = {
  className?: string
  innerClassName?: string
  value: CountdownValueType
  innerStyle?: React.CSSProperties
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Countdown = React.forwardRef<HTMLSpanElement, CountdownProps>(
  ({ value, className, innerClassName, innerStyle = {}, ...rest }, ref) => {
    const styleObj = {
      ...innerStyle,
      '--value': value,
    } as React.CSSProperties

    return (
      <span {...rest} className={clsx('countdown', className)} ref={ref}>
        <span style={styleObj} className={innerClassName} />
      </span>
    )
  }
)

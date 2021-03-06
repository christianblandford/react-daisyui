import * as React from 'react'
import { CountdownValueType } from './CountdownValueType'

export type CountdownItemProps = {
  className?: string
  value: CountdownValueType
  style?: React.CSSProperties
  label?: string | number | React.ReactNode
  labelPosition?: 'left' | 'right' | 'under'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CountdownItem = React.forwardRef<HTMLSpanElement, CountdownItemProps>(
  ({ label, labelPosition = 'right', value, className, style = {}, ...rest }, ref) => {
    const styleObj = {
      ...style,
      '--value': value,
    } as React.CSSProperties

    return <span {...rest} style={styleObj} className={className} ref={ref} />
  }
)

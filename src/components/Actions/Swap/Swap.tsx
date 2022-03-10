import { Tooltip } from '@/components/DataDisplay'
import { ElementWithTooltipProps } from '@/types'
import clsx from 'clsx'
import React, { useState } from 'react'

export type SwapProps = ElementWithTooltipProps & {
  first: React.ReactNode
  second: React.ReactNode
  className?: string
  active?: boolean
  onSwap?: () => void
  rotate?: boolean
  flip?: boolean
  disabled?: boolean
}

const SwapChildElement = ({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <div className={className}>{children}</div>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Swap = React.forwardRef<HTMLDivElement, SwapProps>(
  (
    {
      className,
      first,
      second,
      flip,
      rotate,
      active = false,
      onSwap,
      disabled,
      tooltipForceOpen,
      tooltipPosition,
      tooltipText,
      tooltipVariant,
      ...rest
    },
    ref
  ) => {
    const [isSwapped, setIsSwapped] = useState(active)
    if (!first) {
      throw new Error('Swap component must have an first prop set.')
    }
    if (!second) {
      throw new Error('Swap component must have an second prop set.')
    }

    // Case them as Elements so we can access props and avoid errors
    const firstAsElement = React.isValidElement(first) ? (
      first
    ) : (
      <SwapChildElement>{first}</SwapChildElement>
    )
    const secondAsElement = React.isValidElement(second) ? (
      second
    ) : (
      <SwapChildElement>{second}</SwapChildElement>
    )

    const handleSwapClick = () => {
      if (!disabled) {
        setIsSwapped(!isSwapped)

        onSwap && onSwap()
      }
    }

    const swap = (
      <div
        {...rest}
        className={clsx(
          className,
          'swap',
          flip && 'swap-flip',
          rotate && 'swap-rotate',
          active && 'swap-active'
        )}
        onClick={handleSwapClick}
        ref={ref}
      >
        {React.cloneElement(firstAsElement, {
          className: clsx(
            firstAsElement.props?.className && firstAsElement.props?.className,
            isSwapped ? 'swap-on' : 'swap-off'
          ),
        })}
        {React.cloneElement(secondAsElement, {
          className: clsx(
            secondAsElement.props?.className && secondAsElement.props?.className,
            isSwapped ? 'swap-off' : 'swap-on'
          ),
        })}
      </div>
    )

    if (!tooltipText) {
      return swap
    } else {
      return (
        <Tooltip
          position={tooltipPosition}
          variant={tooltipVariant}
          forceOpen={tooltipForceOpen}
          text={tooltipText}
        >
          {swap}
        </Tooltip>
      )
    }
  }
)

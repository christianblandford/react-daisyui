import React from 'react'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { masks } from '@/components/Layout/Mask/masks'

const sizes = {
  xs: 'rating-xs',
  sm: 'rating-sm',
  md: 'rating-md',
  lg: 'rating-lg',
}

export type RatingChangeHandler = (value: number | null | undefined) => void

export type RatingProps = {
  name?: string
  shape?: keyof typeof masks
  value: number | undefined
  max?: number
  halves?: boolean
  onChange?: RatingChangeHandler
  size?: keyof typeof sizes
  className?: string
  innerClassName?: string
  innerClassNames?: string[]
  disabled?: boolean
  isClearable?: boolean
  round?: 'up' | 'down' | 'closest'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      name = nanoid(),
      value,
      max = 5,
      halves = false,
      shape = 'star',
      onChange,
      className,
      innerClassName,
      innerClassNames,
      size,
      disabled = false,
      isClearable = true,
      round = 'closest',
      ...rest
    },
    ref
  ) => {
    if (innerClassNames && max !== innerClassNames.length) {
      throw new Error(
        'Rating innerClassNames must have the same length as the maximum value (number of shapes).'
      )
    }

    const getRoundedValue = () => {
      if (value) {
        switch (round) {
          case 'up':
            return halves ? Math.ceil(value * 2) / 2 : Math.ceil(value)
          case 'down':
            return halves ? Math.floor(value * 2) / 2 : Math.floor(value)
          default:
            return halves ? Math.round(value * 2) / 2 : Math.round(value)
        }
      } else {
        return value
      }
    }
    const roundedValue = getRoundedValue()

    const handleClick = (value: number | null) => {
      onChange && onChange(value)
    }
    return (
      <div
        {...rest}
        className={clsx(className, 'rating', halves && 'rating-half', size && sizes[size])}
        ref={ref}
      >
        {isClearable && (
          <input
            type="radio"
            name={name}
            className="rating-hidden"
            onClick={() => handleClick(null)}
          />
        )}
        {[...Array(max)].map((_item, index) => (
          <>
            {halves ? (
              <>
                <input
                  key={nanoid()}
                  type="radio"
                  name={name}
                  className={clsx(
                    innerClassName,
                    'mask mask-half-1',
                    innerClassNames && innerClassNames[index] && innerClassNames[index],
                    (!onChange || disabled) && 'pointer-events-none',
                    masks[shape]
                  )}
                  onChange={() => handleClick(index + 0.5)}
                  checked={index + 0.5 === roundedValue}
                />

                <input
                  type="radio"
                  name={name}
                  className={clsx(
                    innerClassName,
                    innerClassNames && innerClassNames[index] && innerClassNames[index],
                    'mask mask-half-2',
                    (!onChange || disabled) && 'pointer-events-none',
                    masks[shape]
                  )}
                  onChange={() => handleClick(index + 1)}
                  checked={index + 1 === roundedValue}
                />
              </>
            ) : (
              <input
                type="radio"
                key={nanoid()}
                name={name}
                className={clsx(
                  innerClassName,
                  innerClassNames && innerClassNames[index] && innerClassNames[index],
                  'mask',
                  (!onChange || disabled) && 'pointer-events-none',
                  masks[shape]
                )}
                onChange={() => handleClick(index + 1)}
                checked={index + 1 === roundedValue}
              />
            )}
          </>
        ))}
      </div>
    )
  }
)

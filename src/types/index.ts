import { tooltipPositions, tooltipVariants } from '@/components/DataDisplay/Tooltip'

export * from './flex'
export * from './shadow'
export * from './mask'

export type ElementWithTooltipProps = {
  tooltipForceOpen?: boolean
  tooltipText?: string
  tooltipPosition?: keyof typeof tooltipPositions
  tooltipVariant?: keyof typeof tooltipVariants
}

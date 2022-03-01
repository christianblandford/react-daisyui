import { Meta, Story } from '@storybook/react'
import clsx from 'clsx'
import { RadialProgressProps } from '.'

import { RadialProgress } from './RadialProgress'

const meta: Meta = {
  title: `Data Display/RadialProgress`,
  component: RadialProgress,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value, className, ...rest }) => (
  <RadialProgress className={className} value={value} {...rest}></RadialProgress>
)

export const Default = Template.bind({})
Default.args = { value: 70 }

export const DifferentValues = ({ value, className, ...rest }: RadialProgressProps) => {
  return (
    <div className="flex flex-col gap-2">
      <RadialProgress value={value || 0} className={className} {...rest}></RadialProgress>
      <RadialProgress value={value || 20} className={className} {...rest}></RadialProgress>
      <RadialProgress value={value || 60} className={className} {...rest}></RadialProgress>
      <RadialProgress value={value || 80} className={className} {...rest}></RadialProgress>
      <RadialProgress value={value || 100} className={className} {...rest}></RadialProgress>
    </div>
  )
}

export const CustomColor = ({ value, className, ...rest }: RadialProgressProps) => {
  return (
    <div>
      <RadialProgress
        value={value || 70}
        className={clsx(className, 'text-primary')}
        {...rest}
      ></RadialProgress>
    </div>
  )
}

export const WithBackgroundColorAndBorder = ({
  value,
  className,
  ...rest
}: RadialProgressProps) => {
  return (
    <div>
      <RadialProgress
        value={value || 70}
        className={clsx(className, 'bg-primary text-primary-content border-4 border-primary')}
        {...rest}
      ></RadialProgress>
    </div>
  )
}

export const CustomSizeAndCustomThickness = ({
  value,
  className,
  size,
  thickness,
  ...rest
}: RadialProgressProps) => {
  return (
    <div>
      <RadialProgress
        value={value || 70}
        className={clsx(className, 'text-primary')}
        size={size || '12rem'}
        thickness={thickness || '2px'}
        {...rest}
      ></RadialProgress>
      <RadialProgress
        value={value || 70}
        className={clsx(className, 'text-primary')}
        size={size || '12rem'}
        thickness={thickness || '2rem'}
        {...rest}
      ></RadialProgress>
    </div>
  )
}

export const NoPercentSign = ({ value = 75, className, ...rest }: RadialProgressProps) => {
  return (
    <RadialProgress
      hidePercentSign
      value={value || 0}
      className={className}
      {...rest}
    ></RadialProgress>
  )
}

export const NoText = ({ value = 75, className, ...rest }: RadialProgressProps) => {
  return (
    <RadialProgress
      showNumber={false}
      value={value || 0}
      className={className}
      {...rest}
    ></RadialProgress>
  )
}

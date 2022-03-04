import { Card } from '@/components'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Stack } from './Stack'

const meta: Meta = {
  title: `Layout/Stack`,
  component: Stack,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => (
  <Stack className={className} {...rest}>
    {children}
  </Stack>
)

export const Default = Template.bind({})
Default.args = {
  children: [
    <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
      1
    </div>,
    <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
      2
    </div>,
    <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
      3
    </div>,
  ],
}

export const StackedImages = Template.bind({})
StackedImages.args = {
  children: [
    <img
      src="https://api.lorem.space/image/face?w=100&h=100&hash=8B7BCDC2"
      alt="Image 1"
      className="rounded"
    />,
    <img
      src="https://api.lorem.space/image/face?w=100&h=100&hash=500B67FB"
      alt="Image 2"
      className="rounded"
    />,
    <img
      src="https://api.lorem.space/image/face?w=100&h=100&hash=A89D0DE6"
      alt="Image 3"
      className="rounded"
    />,
  ],
}

export const StackedCards = Template.bind({})
StackedCards.args = {
  children: [
    <Card bordered className="shadow-none text-center w-36 bg-base-100 border-base-content">
      A
    </Card>,
    <Card bordered className="shadow-none text-center w-36 bg-base-100 border-base-content">
      B
    </Card>,
    <Card bordered className="shadow-none text-center w-36 bg-base-100 border-base-content">
      C
    </Card>,
    <Card bordered className="shadow-none text-center w-36 bg-base-100 border-base-content">
      D
    </Card>,
  ],
}

export const StackedCardsWithShadow = Template.bind({})
StackedCardsWithShadow.args = {
  children: [
    <Card className="text-center w-36 bg-base-100">A</Card>,
    <Card className="text-center w-36 bg-base-100">B</Card>,
    <Card className="text-center w-36 bg-base-100">C</Card>,
  ],
}

export const StackedCardsWithBgColor = Template.bind({})
StackedCardsWithBgColor.args = {
  children: [
    <Card className="text-center w-36 bg-primary text-primary-content">A</Card>,
    <Card className="text-center w-36 bg-secondary text-primary-content">B</Card>,
    <Card className="text-center w-36 bg-accent text-primary-content">C</Card>,
  ],
}

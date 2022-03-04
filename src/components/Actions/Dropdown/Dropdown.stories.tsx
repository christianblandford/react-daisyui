import { Card } from '@/components'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Button } from '..'

import { Dropdown } from './Dropdown'

const meta: Meta = {
  title: 'Actions/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ label = 'Click', ...rest }) => (
  <div className="h-96 flex flex-col items-center">
    <Dropdown {...rest}>
      <Dropdown.Label>{label}</Dropdown.Label>
      <Dropdown.Content>
        <Dropdown.Item>Test 1</Dropdown.Item>
        <Dropdown.Item>Test 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const AlignsToEnd = Template.bind({})
AlignsToEnd.args = { end: true }
AlignsToEnd.storyName = 'Dropdown / aligns to end'

export const Top: Story = ({ label = 'Click', ...rest }) => (
  <div className="flex flex-row h-96 items-end justify-center">
    <Dropdown top {...rest}>
      <Dropdown.Label>{label}</Dropdown.Label>
      <Dropdown.Content>
        <Dropdown.Item>Test 1</Dropdown.Item>
        <Dropdown.Item>Test 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </div>
)
Top.storyName = 'Dropdown top'

export const TopAlignedBottom: Story = ({ label = 'Click', top = true, end = true, ...rest }) => (
  <div className="flex flex-row h-96 items-end justify-center">
    <Dropdown top={top} end={end} {...rest}>
      <Dropdown.Label>{label}</Dropdown.Label>
      <Dropdown.Content>
        <Dropdown.Item>Test 1</Dropdown.Item>
        <Dropdown.Item>Test 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </div>
)
TopAlignedBottom.storyName = 'Dropdown top / aligns to end'

export const AlignsToLeft = Template.bind({})
AlignsToLeft.args = { left: true }

export const LeftAndEnd = Template.bind({})
LeftAndEnd.args = { left: true, end: true }
LeftAndEnd.storyName = 'Dropdown left / aligns to end'

export const AlignsToRight = Template.bind({})
AlignsToRight.args = { right: true }

export const RightAndEnd = Template.bind({})
RightAndEnd.args = { right: true, end: true }
RightAndEnd.storyName = 'Dropdown right / aligns to end'

export const DropdownOnHover = Template.bind({})
DropdownOnHover.args = { openOnHover: true }

export const ForceOpen = Template.bind({})
ForceOpen.args = { forceOpen: true }

export const CardAsDropdown = ({ label = 'Click', ...rest }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Dropdown end {...rest}>
        <Dropdown.Label>{label}</Dropdown.Label>
        <Dropdown.Content>
          <Card compact title="Card title!" className="w-64 p-2 bg-primary text-primary-content">
            you can use any element as a dropdown.
          </Card>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}

const MenuIconButton = ({ toggleOpen }: { toggleOpen?: () => void }) => {
  return <DotsVerticalIcon onClick={toggleOpen} />
}

export const IconAsLabel = ({ label = 'Click', ...rest }) => {
  return (
    <Dropdown {...rest}>
      <Dropdown.Label className="w-6 h-6">
        <MenuIconButton />
      </Dropdown.Label>
      <Dropdown.Content>
        <Dropdown.Item>Test 1</Dropdown.Item>
        <Dropdown.Item>Test 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  )
}

const HelperDropDownIcon = ({ toggleOpen }: { toggleOpen?: () => void }) => {
  return (
    <Button onClick={toggleOpen} variant="ghost" size="xs" className="text-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </Button>
  )
}

export const HelperDropdown = ({ label = 'Click', ...rest }) => {
  return (
    <div>
      A normal text and a helper dropdown
      <Dropdown end {...rest}>
        <Dropdown.Label className="w-6 h-6">
          <HelperDropDownIcon />
        </Dropdown.Label>
        <Dropdown.Content>
          <Card compact title="You needed more info?" className="bg-base-100 w-64">
            Here is a description.
          </Card>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}

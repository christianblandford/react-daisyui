import { Mask } from '@/components'
import { Meta, Story } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta = {
  title: `Data Display/Avatar`,
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Avatar {...rest}>{children}</Avatar>

export const Default = Template.bind({})
Default.args = {
  children: (
    <div className="w-24 rounded">
      <img src="https://api.lorem.space/image/face?hash=92048" />
    </div>
  ),
}

export const CustomSizes: Story = ({ children, ...rest }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar>
        <div className="w-32 rounded">
          <img src="https://api.lorem.space/image/face?hash=88560" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-20 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=80245"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-16 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=77703"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-8 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=33791"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </Avatar>
    </div>
  )
}

export const WithMask: Story = ({ children, ...rest }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar>
        <Mask shape="squircle" className="w-24" wrapWithDiv>
          <img src="https://api.lorem.space/image/face?hash=47449" />
        </Mask>
      </Avatar>
      <Avatar>
        <div className="w-20 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=80245"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </Avatar>
    </div>
  )
}

export const WithRing: Story = ({ children, ...rest }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar>
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </Avatar>
    </div>
  )
}

export const WithPresenceIndicator: Story = ({ children, ...rest }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar online={true}>
        <div className="w-24 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=28212" />
        </div>
      </Avatar>
      <Avatar online={false}>
        <div className="w-24 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=40361" />
        </div>
      </Avatar>
    </div>
  )
}

export const AvatarPlaceholder: Story = ({ children, ...rest }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar placeholder>
        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
          <span className="text-3xl">K</span>
        </div>
      </Avatar>
      <Avatar online placeholder>
        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
          <span className="text-xl">JO</span>
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span>MX</span>
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
          <span className="text-xs">AA</span>
        </div>
      </Avatar>
    </div>
  )
}

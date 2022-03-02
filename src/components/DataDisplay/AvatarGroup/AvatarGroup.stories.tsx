import { Meta, Story } from '@storybook/react'
import { Avatar } from '../Avatar'

import { AvatarGroup } from './AvatarGroup'

const meta: Meta = {
  title: `Data Display/AvatarGroup`,
  component: AvatarGroup,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => (
  <div className="flex flex-row items-center justify-center">
    <AvatarGroup {...rest}>{children}</AvatarGroup>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=53273" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=91831" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=27312" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=26448" />
        </div>
      </Avatar>
    </>
  ),
}

export const WithCounter = Template.bind({})
WithCounter.args = {
  children: (
    <>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=4818" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=40311" />
        </div>
      </Avatar>
      <Avatar>
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=84348" />
        </div>
      </Avatar>
      <Avatar placeholder>
        <div className="w-12 bg-neutral-focus text-neutral-content">
          <span>+99</span>
        </div>
      </Avatar>
    </>
  ),
}

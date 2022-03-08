import { Meta, Story } from '@storybook/react'
import { Stat } from './Stat'
import { Button } from '../../Actions'

import { Stats } from './Stats'

const meta: Meta = {
  title: `Data Display/Stats`,
  component: Stats,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Stats {...rest}>{children}</Stats>

export const Default = Template.bind({})
Default.args = {}

export const WithIconsOrImage = Template.bind({})
WithIconsOrImage.args = {
  children: [
    <Stat
      figure={
        <div className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
      }
      title="Total Likes"
      value="25.6K"
      variant="primary"
      description="21% more than last month"
    />,
    <Stat
      figure={
        <div className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
      }
      title="Page Views"
      value="2.6M"
      variant="secondary"
      description="21% more than last month"
    />,
    <Stat>
      <Stat.Figure variant="secondary">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://api.lorem.space/image/face?w=128&h=128" />
          </div>
        </div>
      </Stat.Figure>
      <Stat.Value>86%</Stat.Value>
      <Stat.Title>Tasks done</Stat.Title>
      <Stat.Description variant="secondary">31 tasks remaining</Stat.Description>
    </Stat>,
  ],
}

export const Centered = Template.bind({})
Centered.args = {
  centered: true,
  children: [
    <Stat title="Downloads" value="31k" description="Jan 1st - Feb 1st" />,
    <Stat variant="secondary" title="Users" value="4,200" description="↗︎ 400 (22%)" />,
    <Stat title="New Registers" value="1,200" description="↘︎ 90 (14%)" />,
  ],
}

export const Vertical = Template.bind({})
Vertical.args = {
  vertical: true,
  children: [
    <Stat title="Downloads" value="31k" description="Jan 1st - Feb 1st" />,
    <Stat variant="secondary" title="Users" value="4,200" description="↗︎ 400 (22%)" />,
    <Stat title="New Registers" value="1,200" description="↘︎ 90 (14%)" />,
  ],
}

export const Responsive = Template.bind({})
Responsive.args = {
  Vertical: true,
  className: 'lg:stats-horizontal shadow',
  children: [
    <Stat title="Downloads" value="31k" description="Jan 1st - Feb 1st" />,
    <Stat variant="secondary" title="Users" value="4,200" description="↗︎ 400 (22%)" />,
    <Stat title="New Registers" value="1,200" description="↘︎ 90 (14%)" />,
  ],
}

export const WithCustomColorsAndButton = Template.bind({})
WithCustomColorsAndButton.args = {
  className: 'bg-primary text-primary-content',
  children: [
    <Stat
      title="Account balance"
      value="$89,400"
      actions={
        <Button variant="success" size="sm">
          Add funds
        </Button>
      }
    />,
    <Stat
      title="Current balance"
      value="$89,400"
      actions={[<Button size="sm">Withdrawal</Button>, <Button size="sm">Deposit</Button>]}
    />,
  ],
}

import { Meta, Story } from '@storybook/react'
import { Button } from '../../../Actions'
import { Stat } from './Stat'

const meta: Meta = {
  title: `Data Display/Stats/Stat`,
  component: Stat,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Stat {...rest}>{children}</Stat>

export const Default = Template.bind({})
Default.args = {
  title: 'Total Page Views',
  value: '89,400',
  description: '21% more than last month',
}

export const AsProps = Template.bind({})
AsProps.args = {
  title: 'Total Page Views',
  value: '89,400',
  description: '21% more than last month',
  figure: (
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
  ),
  actions: [<Button variant="success">Action</Button>],
}

export const AsComponents: Story = ({ ...rest }) => {
  return (
    <Stat {...rest}>
      <Stat.Figure variant="secondary">
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
      </Stat.Figure>
      <Stat.Title>Total Page Views</Stat.Title>
      <Stat.Value>89,400</Stat.Value>
      <Stat.Description>21% more than last month</Stat.Description>
      <Stat.Actions>
        <Button variant="success">Action</Button>
      </Stat.Actions>
    </Stat>
  )
}

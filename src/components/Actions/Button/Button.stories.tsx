import { ArrowRightIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { Meta, Story } from '@storybook/react'

import { Button } from '../'

const meta: Meta = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children = 'Button', ...rest }) => <Button {...rest}>{children}</Button>

export const Default = Template.bind({})
Default.args = {}

export const BrandColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export const StateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button variant="info">info</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="error">error</Button>
    </div>
  )
}

export const Outline = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button outline>Default</Button>
      <Button outline variant="primary">
        Primary
      </Button>
      <Button outline variant="secondary">
        Secondary
      </Button>
      <Button outline variant="accent">
        Accent
      </Button>
    </div>
  )
}

export const OutlineWithStateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button outline variant="info">
        info
      </Button>
      <Button outline variant="success">
        success
      </Button>
      <Button outline variant="warning">
        warning
      </Button>
      <Button outline variant="error">
        error
      </Button>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button size="lg">lg</Button>
      <Button>Default</Button>
      <Button size="sm">sm</Button>
      <Button size="xs">xs</Button>
    </div>
  )
}

export const Wide = Template.bind({})
Wide.args = { children: 'Wide Button', wide: true }

export const Icon = Template.bind({})
Icon.args = {
  children: 'Button With Icon',
  startIcon: <ClipboardCheckIcon className="h-6 w-6" />,
}

export const IconAtEnd = Template.bind({})
IconAtEnd.args = {
  children: 'Button With Icon',
  endIcon: <ClipboardCheckIcon className="h-6 w-6" />,
}

export const TwoIcons = Template.bind({})
TwoIcons.args = {
  children: 'Button With Icon',
  startIcon: <ClipboardCheckIcon className="h-6 w-6" />,
  endIcon: <ArrowRightIcon className="h-6 w-6" />,
}

export const Loading = Template.bind({})
Loading.args = {
  children: 'Loading Button',
  isLoading: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
}

export const WithHref = Template.bind({})
WithHref.args = {
  href: 'https://www.google.com',
  children: 'Link Button',
}
WithHref.storyName = 'With href, renders as <a>'

export const NoClickAnimation = Template.bind({})
NoClickAnimation.args = {
  children: 'No Click Animation',
  noAnimation: true,
}

export const ButtonWithTooltipVariants = () => {
  return (
    <div className="h-96 flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-row gap-2">
        <Button tooltipText="Click the button">Default</Button>
        <Button variant="primary" tooltipVariant="primary" tooltipText="Click the button">
          Primary
        </Button>
        <Button variant="secondary" tooltipVariant="secondary" tooltipText="Click the button">
          Secondary
        </Button>
        <Button variant="accent" tooltipVariant="accent" tooltipText="Click the button">
          Accent
        </Button>
        <Button variant="ghost" tooltipVariant="ghost" tooltipText="Click the button">
          Ghost
        </Button>
        <Button variant="link" tooltipText="Click the button">
          Link
        </Button>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="info" tooltipVariant="info" tooltipText="Click the button">
          info
        </Button>
        <Button variant="success" tooltipVariant="success" tooltipText="Click the button">
          success
        </Button>
        <Button variant="warning" tooltipVariant="warning" tooltipText="Click the button">
          warning
        </Button>
        <Button variant="error" tooltipVariant="error" tooltipText="Click the button">
          error
        </Button>
      </div>
    </div>
  )
}

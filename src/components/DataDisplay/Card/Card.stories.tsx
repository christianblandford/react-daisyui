import { Button } from '@/components/Actions'
import { Meta, Story } from '@storybook/react'
import { Badge } from '../Badge'

import { Card } from './Card'

const meta: Meta = {
  title: `Data Display/Card`,
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => (
  <div className="w-full">
    <Card {...rest}>{children}</Card>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Shoes!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  figure: <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></img>,
  actions: <Button variant="primary">Buy Now</Button>,
}

export const Compact = Template.bind({})
Compact.args = {
  title: 'Shoes!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  figure: <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></img>,
  actions: <Button variant="primary">Buy Now</Button>,
  compact: true,
}

export const WithBadge = Template.bind({})
WithBadge.args = {
  title: (
    <>
      Shoes!<Badge variant="secondary">NEW</Badge>
    </>
  ),
  children: 'If a dog chews shoes whose shoes does he choose?',
  figure: <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></img>,
  actions: (
    <>
      <Badge outline>Fashion</Badge>
      <Badge outline>Products</Badge>
    </>
  ),
}

export const BottomImage = Template.bind({})
BottomImage.args = {
  title: 'Shoes!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  figure: (
    <div className="pt-10 px-10">
      <img
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
        className="rounded-xl"
      ></img>
    </div>
  ),
  actions: <Button variant="primary">Buy Now</Button>,
  innerClassName: 'items-center text-center',
}

export const ImageOverlay = Template.bind({})
ImageOverlay.args = {
  title: 'Shoes!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  figure: <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"></img>,
  actions: <Button variant="primary">Buy Now</Button>,
  figureOverlay: true,
}

export const NoImage = Template.bind({})
NoImage.args = {
  title: 'Card title!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  actions: <Button variant="primary">Buy Now</Button>,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  className: 'bg-primary text-primary-content',
  title: 'Card title!',
  children: 'If a dog chews shoes whose shoes does he choose?',
  actions: <Button>Buy Now</Button>,
}

export const CenteredWithNeutralColor = Template.bind({})
CenteredWithNeutralColor.args = {
  className: 'bg-neutral text-neutral-content',
  innerClassName: 'items-center text-center',
  title: 'Cookies!',
  children: 'We are using cookies for no reason.',
  actions: (
    <>
      <Button variant="primary">Accept</Button>
      <Button>Deny</Button>
    </>
  ),
}

export const ActionOnTop = Template.bind({})
ActionOnTop.args = {
  children: 'We are using cookies for no reason.',
  actionsPosition: 'start',
  actions: (
    <Button shape="square" size="sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Button>
  ),
}

export const Glass = Template.bind({})
Glass.args = {
  title: 'Life hack',
  children: 'How to park your car at your garage?',
  figure: <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />,
  actions: <Button variant="primary">Learn now!</Button>,
  glass: true,
}

export const ImageOnSide = Template.bind({})
ImageOnSide.args = {
  title: 'New movie is released!',
  children: 'Click the button to watch on Jetflix app',
  figure: <img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" />,
  actions: <Button variant="primary">Watch</Button>,
  layout: 'horizontal',
}

export const ResponsiveCard = Template.bind({})
ResponsiveCard.args = {
  className: 'lg:card-side',
  title: 'New album is released!',
  children: <p>Click the button to listen on Spotiwhy app.</p>,
  figure: <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />,
  actions: <Button variant="primary">Listen</Button>,
  responsive: true,
}

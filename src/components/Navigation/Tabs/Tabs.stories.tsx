import { H3, Prose } from '@/components/Typography'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { useState } from 'react'
import { Tab } from './Tab'

import { Tabs } from './Tabs'

const meta: Meta = {
  title: `Navigation/Tabs`,
  component: Tabs,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <Tabs {...rest} activeTabIndex={activeTabIndex} onChange={(index) => setActiveTabIndex(index)}>
      <Tab title="Tab 1" />
      <Tab title="Tab 2" />
      <Tab title="Tab 3" />
    </Tabs>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Bordered = Template.bind({})
Bordered.args = { bordered: true }

export const Lifted = Template.bind({})
Lifted.args = { lifted: true }

export const Boxed = Template.bind({})
Boxed.args = { boxed: true }

export const Sizes: Story = ({ children, ...rest }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <div className="flex flex-col items-center gap-4">
      <Tabs
        {...rest}
        size="xs"
        activeTabIndex={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>
      <Tabs
        {...rest}
        size="sm"
        activeTabIndex={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>
      <Tabs
        {...rest}
        size="md"
        activeTabIndex={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>
      <Tabs
        {...rest}
        size="lg"
        activeTabIndex={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>
    </div>
  )
}

export const CustomActiveTabClassName = Template.bind({})
CustomActiveTabClassName.args = { activeTabClassName: 'bg-green-500 rounded-xl' }

export const CustomActiveTabStyle = Template.bind({})
CustomActiveTabStyle.args = {
  activeTabStyle: {
    background: 'linear-gradient(to right, #7b4397, #dc2430)',
    transform: 'rotate(20deg)',
  },
}

export const DynamicContent: Story = ({ children, ...rest }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <div className="w-full flex flex-col gap-4">
      <Tabs
        {...rest}
        activeTabIndex={activeTabIndex}
        onChange={(index) => setActiveTabIndex(index)}
        bordered
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>

      <div className="flex-1 p-4">
        {activeTabIndex === 0 && (
          <div>
            <Prose>
              <h2>Tab 1 Content</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus diam et odio
                egestas, eu blandit turpis mattis. Phasellus at ante eu magna varius commodo. Ut
                blandit lacus et libero accumsan, et porttitor nibh consectetur. Maecenas vitae ex
                vitae risus aliquet congue in tincidunt turpis.
              </blockquote>
            </Prose>
          </div>
        )}
        {activeTabIndex === 1 && (
          <div>
            <Prose>
              <h2>Tab 2 Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor sapien, commodo
                id auctor eu, porttitor eget lacus. Sed non massa sollicitudin, blandit sem ut,
                volutpat massa. Sed dictum ipsum dictum, fermentum ipsum ultrices, placerat nisi.
                Curabitur a metus vehicula, faucibus dui nec, rhoncus lorem. Vestibulum elit nisi,
                euismod vel sagittis quis, faucibus ut purus. Nulla ut pellentesque mauris. Cras
                condimentum semper scelerisque. Sed in odio dapibus, lacinia nisi et, laoreet orci.
                Mauris malesuada, purus ac venenatis gravida, leo lectus sollicitudin ipsum, et
                efficitur mi libero vitae arcu. Etiam ullamcorper, sapien et congue scelerisque,
                lorem nisi dapibus massa, vulputate luctus nibh neque sed lacus. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras
                condimentum blandit nibh, id tristique est maximus in. Cras quis orci nunc. Proin
                commodo suscipit neque auctor blandit. Sed vitae est mollis, hendrerit tellus a,
                pretium quam. Nunc in malesuada erat, vitae auctor mi. Praesent eu libero interdum,
                cursus metus at, accumsan eros. Phasellus sit amet convallis velit. Duis finibus in
                ligula vitae fringilla. Aliquam blandit, quam a porttitor vulputate, felis est
                rutrum enim, at accumsan massa felis placerat felis. In aliquam malesuada nibh non
                vulputate. Nunc elit est, euismod vel tortor vitae, dapibus suscipit augue. Maecenas
                tempus interdum lacus, at vehicula justo consectetur sit amet. Proin vitae arcu
                ultrices lacus consequat facilisis. Proin euismod est eleifend eros suscipit, eu
                elementum urna imperdiet. Duis vehicula cursus consectetur. Praesent mollis tellus
                eget libero iaculis vulputate. Pellentesque nec dui lacus. Nunc in elit eros.
                Phasellus elementum congue pulvinar. Vestibulum placerat est metus, ut pretium felis
                iaculis id. Cras lacinia ultricies purus luctus facilisis. Nam hendrerit tincidunt
                purus, vel rutrum massa pharetra in. Morbi accumsan ante in sem ultricies tristique.
                Integer congue vitae augue et fringilla. Vestibulum non odio placerat, feugiat ex
                id, aliquet est. Nullam fermentum laoreet ante quis mattis.
              </p>
            </Prose>
          </div>
        )}
        {activeTabIndex === 2 && <div>Tab 3 content</div>}
      </div>
    </div>
  )
}

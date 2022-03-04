import { useEffect } from '@storybook/addons'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

import { Select, SelectProps, SelectReturnType } from './Select'

const meta: Meta = {
  title: `Data Input/Select`,
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    onChange: {
      control: false,
    },
  },
}

export default meta

const Template: Story = ({ value, options, ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  const handleChange = (value: SelectReturnType) => {
    setStateVal(value.value)
  }

  return <Select {...rest} options={options} onChange={handleChange} value={stateVal} />
}

export const Default = Template.bind({})
const simpsons = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
Default.args = {
  placeholder: 'Pick your favorite Simpson',
  options: simpsons,
}
Default.argTypes = {
  ...Default.argTypes,
  value: { options: [undefined, ...simpsons], control: { type: 'select' } },
}

export const WithBorder = Template.bind({})
const withBorderOptions = ['Han Solo', 'Greedo']
WithBorder.args = {
  placeholder: 'Who shot first?',
  options: withBorderOptions,
  bordered: true,
}
WithBorder.argTypes = {
  ...WithBorder.argTypes,
  value: { options: [undefined, ...withBorderOptions], control: { type: 'select' } },
}

export const Ghost = Template.bind({})
const ghostOptions = ['React', 'Svelte', 'Vue', 'Angular']
Ghost.args = {
  placeholder: 'Pick the best JS Framework',
  options: ghostOptions,
  variant: 'ghost',
}
Ghost.argTypes = {
  ...Ghost.argTypes,
  value: { options: [undefined, ...ghostOptions], control: { type: 'select' } },
}

export const Primary = Template.bind({})
const primaryOptions = ['Game of Thrones', 'Lost', 'Breaking Bad', 'Walking Dead']
Primary.args = {
  placeholder: 'What is the best TV show?',
  options: primaryOptions,
  variant: 'primary',
}
Primary.argTypes = {
  ...Primary.argTypes,
  value: { options: [undefined, ...primaryOptions], control: { type: 'select' } },
}

export const Secondary = Template.bind({})
const secondaryOptions = ['Java', 'Go', 'C', 'C#', 'C++', 'Rust', 'JavaScript', 'Python']
Secondary.args = {
  placeholder: 'Pick your favorite language',
  options: secondaryOptions,
  variant: 'secondary',
}
Secondary.argTypes = {
  ...Secondary.argTypes,
  value: { options: [undefined, ...secondaryOptions], control: { type: 'select' } },
}

export const Accent = Template.bind({})
const accentOptions = ['Auto', 'Dark', 'Light']
Accent.args = {
  placeholder: 'Dark mode or light mode?',
  options: accentOptions,
  variant: 'accent',
}
Accent.argTypes = {
  ...Accent.argTypes,
  value: { options: [undefined, ...accentOptions], control: { type: 'select' } },
}

export const Info = Template.bind({})
const infoOptions = ['English', 'Japanese', 'Italian']
Info.args = {
  placeholder: 'Select language',
  options: infoOptions,
  variant: 'info',
}
Info.argTypes = {
  ...Info.argTypes,
  value: { options: [undefined, ...infoOptions], control: { type: 'select' } },
}

export const Success = Template.bind({})
const successOptions = ['Lab', 'Shiba Inu', 'Golden Retriever', 'Airedale', 'Corgi', 'Yorkie']
Success.args = {
  placeholder: 'Pick your favorite breed of dog?',
  options: successOptions,
  variant: 'success',
}
Success.argTypes = {
  ...Success.argTypes,
  value: { options: [undefined, ...successOptions], control: { type: 'select' } },
}

export const Warning = Template.bind({})
const warningOptions = ['Cheese', 'Veggie', 'Pepperoni', 'Margherita', 'Hawaiian']
Warning.args = {
  placeholder: 'Pick a pizza',
  options: warningOptions,
  variant: 'warning',
}
Warning.argTypes = {
  ...Warning.argTypes,
  value: { options: [undefined, ...warningOptions], control: { type: 'select' } },
}

export const Error = Template.bind({})
const errorOptions = ['Strapi', 'Ghost', 'Netlify CMS', 'Sanity']
Error.args = {
  placeholder: 'What is the best headless CMS?',
  options: errorOptions,
  variant: 'error',
}
Error.argTypes = {
  ...Error.argTypes,
  value: { options: [undefined, ...errorOptions], control: { type: 'select' } },
}

const sizes = [
  { value: 'lg', label: 'Large' },
  { value: 'md', label: 'Normal' },
  { value: 'sm', label: 'Small' },
  { value: 'xs', label: 'Tiny' },
]
const sizesOptions = ['Apple', 'Orange', 'Tomato']

export const Sizes: Story = ({ value, bordered = true, ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  const handleChange = (value: SelectReturnType) => {
    setStateVal(value.value)
  }

  return (
    <div className="flex flex-col gap-4 w-2/3 lg:w-1/2">
      {sizes.map((size) => (
        <Select
          {...rest}
          key={nanoid()}
          bordered={bordered}
          options={sizesOptions.map((item) => `${size.label} ${item}`)}
          value={value}
          size={size.value as SelectProps['size']}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}
Sizes.argTypes = {
  ...Sizes.argTypes,
  value: { options: [undefined, ...sizesOptions], control: { type: 'select' } },
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: `You can't touch this`,
  options: [],
  disabled: true,
  className: 'w-full max-w-xs',
}
Disabled.argTypes = {
  ...Disabled.argTypes,
  value: { control: false },
}

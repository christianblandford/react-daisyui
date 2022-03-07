# react-daisyui

🚧 WORK IN PROGRESS 🚧

A React.js wrapper for [daisyUI](https://github.com/saadeghi/daisyui)

[Storybook](https://christianblandford.github.io/react-daisyui)

### Help wanted

🚨 We are looking for contributors to this project! If you have packaging skills, react skills, or Github skills, we would love to work with you! 🚨

# Installing

First [install tailwindcss](https://tailwindcss.com/docs/installation)

Then [install and configure daisyUI](https://daisyui.com/docs/install/)

Install this package:

`yarn add react-daisyui` or `npm add react-daisyui`

Finally **(and most importantly)**, add this package to your content/purge array in your tailwind.config.js. This library WILL NOT WORK properly without doing this.

Example:

```
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './node_modules/react-daisyui/dist/*.js'
  ],
  // ...
}
```

# Usage

     import {Button} from 'react-daisyui'

     ...

     export const YourComponent = () => {
         return (
             <Button variant="success">Click me!</Button>
         )
     }

Documentation and list of components is available in the [Storybook](https://christianblandford.github.io/react-daisyui).

# Components

- Actions

  - [x] Button
  - [ ] Dropdown
  - [x] Modal
  - [x] Swap

- Data display

  - [x] Alert
  - [x] Avatar
  - [x] Badge
  - [x] Card
  - [ ] Carousel
  - [x] Collapse
  - [x] Countdown
  - [x] Kbd
  - [x] Progress
  - [x] Radial progress
  - [ ] Stat
  - [ ] Table
  - [ ] Tooltip

- Data input
  - [x] Checkbox
  - [x] Text input
  - [x] Radio
  - [x] Range
  - [x] Rating
  - [x] Select
  - [x] Textarea
  - [x] Toggle
- Layout

  - [ ] Artboard
  - [ ] Button group
  - [x] Divider
  - [ ] Drawer
  - [ ] Footer
  - [ ] Hero
  - [ ] Indicator
  - [x] Input group
  - [x] Mask
  - [x] Stack

- Navigation

  - [ ] Breadcrumbs
  - [x] Link
  - [ ] Menu
  - [ ] Navbar
  - [ ] Pagination
  - [ ] Steps
  - [x] Tab

- Mockup
  - [x] Code
  - [x] Phone
  - [x] Window

# Contributing

## Configuring dev environment

First, clone this repo.

Then run yarn to install all of the dependencies:

`yarn`

Now you can launch the storybook dev server by running:

`yarn storybook`

Your browser will automatically open to Storybook.

## Creating new components

Run `yarn generate component ${your_new_component_name}`.

The generator will ask a few questions and generate the component for you.

Ensure you export the component, at the right levels, or it will not be available to dependent packages.

## Create a new release

`yarn release`

# react-daisyui

🚧 WORK IN PROGRESS 🚧

A React.js wrapper for [daisyUI](https://github.com/saadeghi/daisyui)

[Storybook](https://christianblandford.github.io/react-daisyui)

### Help wanted

🚨 I am looking for contributors to this project, as I do not have time to build all the components and handle the community on my own. 🚨

I am somewhat new to deploying npm packages and very new to storybook and plop, I would expecially appreciate any contributions in this area.

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

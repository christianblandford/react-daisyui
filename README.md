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

Finally, install this package:

`yarn add react-daisyui -D` or `npm add react-daisyui -D`

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

Then run yarn to install all of the dependencies.
`yarn`

Now you can launch the storybook dev server by running:
`yarn start` which will automatically open your browser to storybook.

## Creating new components

Run `yarn generate component ${your_new_component_name}`.

The generator will ask a few questions and generate the component for you.

Ensure you export the component, at the right levels, or it will not be available to dependent packages.

## Publishing new storybook

Run `yarn predeploy` to build the new storybook

Run `yarn deploy-storybook` to automatically deploy to GH pages.

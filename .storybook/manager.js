import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  sidebar: {
    showRoots: true,
  },
  theme: create({
    base: 'light',
    brandTitle: 'react-daisyUI',
    brandUrl: 'https://github.com/christianblandford/react-daisyui',

    colorPrimary: '#793EF9',
    colorSecondary: '#F000B8',

    inputBorderRadius: 4,
  }),
})

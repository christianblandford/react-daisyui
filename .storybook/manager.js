import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

window.STORYBOOK_GA_ID = 'UA-72735922-5'
window.STORYBOOK_REACT_GA_OPTIONS = {}

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

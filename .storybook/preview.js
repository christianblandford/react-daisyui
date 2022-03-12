import '../tailwind.css'
import '../style.css'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  themes: {
    default: 'light',
    onChange: (theme) => {
      if (theme) {
        window.localStorage.setItem('react-daisyui-preview-theme', theme.class)
      } else {
        window.localStorage.removeItem('react-daisyui-preview-theme')
      }
    },
    list: [
      { name: 'light', class: 'light', color: '#570df8' },
      { name: 'dark', class: 'dark', color: '#793ef9' },
      { name: 'cupcake', class: 'cupcake', color: '#65c3c8' },
      { name: 'bumblebee', class: 'bumblebee', color: '#e0a82e' },
      { name: 'emerald', class: 'emerald', color: '#66cc8a' },
      { name: 'corporate', class: 'corporate', color: '#4b6bfb' },
      { name: 'synthwave', class: 'synthwave', color: '#e779c1' },
      { name: 'retro', class: 'retro', color: '#ef9995' },
      { name: 'cyberpunk', class: 'cyberpunk', color: '#ff7598' },
      { name: 'cmyk', class: 'cmyk', color: '#45AEEE' },
      { name: 'valentine', class: 'valentine', color: '#e96d7b' },
      { name: 'halloween', class: 'halloween', color: '#f28c18' },
      { name: 'garden', class: 'garden', color: '#5c7f67' },
      { name: 'forest', class: 'forest', color: '#1eb854' },
      { name: 'aqua', class: 'aqua', color: '#09ecf3' },
      { name: 'lofi', class: 'lofi', color: '#808080' },
      { name: 'pastel', class: 'pastel', color: '#d1c1d7' },
      { name: 'fantasy', class: 'fantasy', color: '#6e0b75' },
      { name: 'wireframe', class: 'wireframe', color: '#b8b8b8' },
      { name: 'black', class: 'black', color: '#333333' },
      { name: 'luxury', class: 'luxury', color: '#ffffff' },
      { name: 'dracula', class: 'dracula', color: '#ff79c6' },
      { name: 'autumn', class: 'autumn', color: '#8C0327' },
      { name: 'business', class: 'business', color: '#1C4E80' },
      { name: 'acid', class: 'acid', color: '#FF00F4' },
      { name: 'lemonade', class: 'lemonade', color: '#519903' },
    ],
  },
}
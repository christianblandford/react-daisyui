module.exports = {
  mode: 'jit',
  content: [
    './index.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './node_modules/react-daisyui/**/*.js',
    //  '../dist/**/*.js'
  ],
  darkMode: 'media',
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark',
  },
}

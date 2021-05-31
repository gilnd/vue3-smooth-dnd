const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Sans-serif']
    },
    extend: {
      colors: {
        primary: colors.purple[500],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

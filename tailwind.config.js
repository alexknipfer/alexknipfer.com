const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  variants: {
    margin: ['responsive', 'last'],
    borderWidth: ['last'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        tiny: '0.6rem',
      },
    },
  },
};

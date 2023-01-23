const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
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

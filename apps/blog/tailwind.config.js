const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        DEFAULT: '#E69900',
        50: '#FFECC7',
        100: '#FFE5B3',
        200: '#FFD88A',
        300: '#FFCA61',
        400: '#FFBD38',
        500: '#FFAF0F',
        600: '#E69900',
        700: '#AD7400',
        800: '#754E00',
        900: '#3D2900',
      },
    },
    spacing: {
      0: '0px',
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    fontSize: {
      xs: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    lineHeight: {
      none: '1rem',
      normal: '1.5rem',
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
}
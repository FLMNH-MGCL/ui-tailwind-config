// const _ = require("lodash");
const plugin = require('tailwindcss/plugin');
const uicolors = require('@tailwindcss/ui/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = plugin(
  function () {
    // function ({ addUtilities, e, theme, variants }) {
    // add utilities would go here
  },
  {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      colors: {
        ...uicolors,
        dark: {
          900: 'rgb(25,25,25)',
          800: 'rgb(36,36,36)',
          700: 'rgb(40,40,40)',
          600: '#2D2D2D',
          500: 'rgb(50,50,50)',
          400: '#3d3d3d',
          300: '#b2b2b2',
          200: 'rgb(223,223,223)',
          twilight: 'rgb(30, 30, 30)',
          stacking: 'rgba(25,25,25,0.2)',
        },
      },

      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
        minHeight: {
          0: 0,
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
          40: '10rem',
          48: '12rem',
          56: '14rem',
          64: '16rem',
          68: '17rem',
          72: '18rem',
          76: '19rem',
          80: '20rem',
          84: '21rem',
          88: '22rem',
          92: '23rem',
          '5/6': '83vh',
        },
        minWidth: {
          0: 0,
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          32: '8rem',
          40: '10rem',
          48: '12rem',
          56: '14rem',
          64: '16rem',
        },
      },
    },
    variants: {
      textShadow: ['responsive', 'hover', 'focus'],
    },
    plugins: [
      require('tailwindcss-textshadow'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
);

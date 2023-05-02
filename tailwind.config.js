/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: { 100: '#A18A68' },
        'light-gray': { 100: '#EFEFEF' },
        gray: { 100: '#D8D8D8' },
        'dark-gray': { 100: '#707070' },
      },
      fontFamily: {
        'logo-font': ['Allerta Stencil', 'sans-serif'],
      },
      height: {
        120: '7.5rem',
        600: '37.5rem',
      },
      width: {
        120: '7.5rem',
        484: '30.25rem',
        540: '33.75rem',
      },
    },
    screens: {
      ...defaultTheme.screens,
      mobile: '400px',
      smalltablet: '500px',
      bigtablet: '900px',
    },
  },
  plugins: [],
};

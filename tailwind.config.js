/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: { 100: "#A18A68" },
        gray: { 100: "#D8D8D8" },
        darkGray: { 100: "#707070" },
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

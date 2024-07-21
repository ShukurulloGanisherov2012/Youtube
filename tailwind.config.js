const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cherry: '#FC1503',
        cherry2: '#FC4747',
        plum: "#10141e",
        secondary: "#5A698F",
        primary: "#161D2F",
      },
    },
  },
  darkMode: 'class',
  plugins: [ require('tailwind-scrollbar')({ nocompatible: true })],
});
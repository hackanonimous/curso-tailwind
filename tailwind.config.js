/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent:"transparent",
      current:"currentColor",
      "disabled":"#edfcfe",
      "default":"#159cc5",
      "hover":"#157da5",
      "active":"#1c536e",
      "primary":{
        50:"#edfcfe",
        100:"#d3f4fa",
        200:"#ace8f5",
        300:"#72d6ee",
        400:"#31b9df",
        500:"#159cc5",
        600:"#157da5",
        700:"#176282",
        800:"#1c536e",
        900:"#1c465d",
        950:"#0d2d3f",
      }
    },
    extend: {},
  },
  plugins: [],
}


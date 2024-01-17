/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    Inter: ['Inter', "sans-serif"],
    Montserrat: ['Montserrat', "sans-serif"],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}


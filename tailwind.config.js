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
    extend: {
      linearGradientColors: {
        'blue-green': ['#3490dc', '#38a169'],
        'pink-purple': ['#d53f8c', '#8b5cf6'],
      },
    },
  },
  plugins: [require('daisyui'),],
}


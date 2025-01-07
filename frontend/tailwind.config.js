/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgb(21, 12, 21)', // Custom dark color
        'darkpurple': 'rgb(142,33,87)', // Custom purple color
      },
      screens: {
        'custom': '1200px', // Custom breakpoint
        'custom0': {'max': '1450px'},
        'custom1': {'max': '1350px'},
        'custom2': '1350px',
        'custom4': {'max': '1040px'},
        'custom5': {'max': '540px'},
        'custom6': {'max': '740px'},
        'custom7': {'max': '1100px'},
        'custom8': {'max': '770px'},
      },
    },
  },
  plugins: [],
}


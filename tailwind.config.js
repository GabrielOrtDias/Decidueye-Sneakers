/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"]
    },
    colors:{
      'sky': {
        1: "#22577a",
        2: "#38a3a5",
        3: "#57cc99",
        4: "#19e8b1",
        5: "#c7f9cc",
      },
      'bg': "#0d1b2a",
      'forest': {
        1: '#00df81',
        2: '#032221',
        3: '#03624c',
        4: '#2cc295',
        'white': '#f1f7f6',
      }
    },
    extend: {},
  },
  plugins: [],
}
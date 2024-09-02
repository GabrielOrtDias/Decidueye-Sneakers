/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'sky': {
        1: "#22577a",
        2: "#38a3a5",
        3: "#57cc99",
        4: "#19e8b1",
        5: "#c7f9cc",
      },
      'bg': "#0d1b2a",
    },
    extend: {},
  },
  plugins: [],
}
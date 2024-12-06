/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
    },
  },
  fontFamily: {
    futura: ['Futura', 'sans-serif'],
  },
  plugins: [],
}

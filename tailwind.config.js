/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], //Archivos a los cuales tailwind les dara seguimiento
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}


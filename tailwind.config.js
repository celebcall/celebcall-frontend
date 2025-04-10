/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suite: ["'SUITE Variable'", 'sans-serif'],
        baloo: ["'Baloo 2'", 'cursive'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        romantic: ['Great Vibes', 'cursive'],
      },
      colors: {
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        gold: {
          400: '#fbbf24',
        }
      }
    },
  },
  plugins: [],
}
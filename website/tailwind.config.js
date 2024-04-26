/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    }
  },
  plugins: [],
}


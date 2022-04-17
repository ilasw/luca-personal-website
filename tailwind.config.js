module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {center: true},
    extend: {
      spacing: {
        col: "1.2rem"
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('postcss-color-function'),
    require('tailwindcss'),
    require('autoprefixer'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '80%'
        }
      })
    },
  ],
}

export default {
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': {},
          'postcss-color-function': {},
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
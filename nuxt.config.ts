import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
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
})
import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
  head() {
    return this.$nuxtI18nHead({addSeoAttributes: true})
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [{code: 'it', name: '🇮🇹 Italiano'}, {code: 'en', name: '🇬🇧 English'}],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: {
        en: {}
      }
    }
  },
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
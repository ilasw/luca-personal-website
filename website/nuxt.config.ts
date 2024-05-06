export default defineNuxtConfig({
  devtools: {enabled: false},
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Work+Sans': [400, 500, 700],
      },
      display: 'swap'
    }],
    "@nuxt/image"
  ],
  routeRules: {
    '/en': {redirect: '/'},
  },
  $meta: {
    htmlAttrs: {
      lang: 'en'
    }
  },
  devServerHandlers: []
})
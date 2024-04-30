// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false,
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
})
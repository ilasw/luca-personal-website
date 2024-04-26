// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: process.env.NODE_ENV === 'development'},
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Work+Sans': [400, 500, 700],
      },
      display: 'swap'
    }]
  ]
})

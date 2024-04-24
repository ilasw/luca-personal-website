// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: process.env.NODE_ENV === 'development'},
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt']
})

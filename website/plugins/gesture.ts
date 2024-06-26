import { defineNuxtPlugin } from '#app'
import { GesturePlugin } from '@vueuse/gesture'

export default defineNuxtPlugin( nuxtApp => {
  nuxtApp.vueApp.use(GesturePlugin);
})
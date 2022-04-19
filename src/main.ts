import {ViteSSG} from 'vite-ssg/single-page'
import VueGtag from "vue-gtag";
import {MotionPlugin} from "@vueuse/motion";
import App from './App.vue'

export const createApp = ViteSSG(App, (ctx) => {
  ctx.app.use(MotionPlugin);

  if (import.meta.env.GTAG_ID) {
    ctx.app.use(VueGtag, {
      config: {id: import.meta.env.GTAG_ID}
    })
  }
})

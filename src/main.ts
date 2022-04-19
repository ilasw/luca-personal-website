import {ViteSSG} from 'vite-ssg/single-page'
import VueGtag from "vue-gtag";
import {MotionPlugin} from "@vueuse/motion";
import App from './App.vue'

export const createApp = ViteSSG(App, (ctx) => {
  ctx.app.use(MotionPlugin);

  const {GTAG_ID} = import.meta.env;

  ctx.app.use(VueGtag, {
    config: {id: GTAG_ID}
  })
})

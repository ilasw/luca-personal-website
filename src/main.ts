import {ViteSSG} from 'vite-ssg/single-page'
import VueGtag from "vue-gtag";
import {MotionPlugin} from "@vueuse/motion";
import App from './App.vue'

export const createApp = ViteSSG(App, (ctx) => {
  ctx.app.use(MotionPlugin);

  ctx.app.use(VueGtag, {
    config: {id: 'UA-28358707-9'}
  })
})

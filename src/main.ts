import {ViteSSG} from 'vite-ssg/single-page'
import App from './App.vue'
import {MotionPlugin} from "@vueuse/motion";

export const createApp = ViteSSG(App, (ctx) => {
  ctx.app.use(MotionPlugin)
})

// import {createApp} from "vue";
// createApp(App).mount('#app');

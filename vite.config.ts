import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteImages from 'vite-plugin-vue-images'

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    vue(),
    ViteImages({
      dirs: ['src/assets'],
    })
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  }
})

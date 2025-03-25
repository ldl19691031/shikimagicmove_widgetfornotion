import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/shikimagicmove_widgetfornotion/', // 替换为仓库路径
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      crypto: 'crypto-browserify', // 添加 crypto 的别名
    },
  },
  define: {
    'process.env': {}, // 定义 process.env 以避免相关错误
  },
})

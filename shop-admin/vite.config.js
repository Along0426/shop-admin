import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入path
import path from 'path'

// 引入Windi Css
import WindiCss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), WindiCss()],
})

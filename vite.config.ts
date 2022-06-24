import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import {presetAttributify, presetIcons, presetUno} from 'unocss'
// 以上就是常用的插件，插件都要在config先注册？
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: [
        'vue'
      ]
    }),
    UnoCSS({ // unocss可以让你能够在标签上像属性一样定义样式，不用写到style里面一大堆
      presets: [
        presetUno(),// 这是干啥preset
        presetAttributify(), // what?
        presetIcons()
      ]
    })
  ],
})

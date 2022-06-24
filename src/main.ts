import { createApp } from 'vue'
import App from './App.vue' // 这你给我报错？
import 'uno.css' // 虚拟module，不知道是啥
// import '@unocss/reset/tailwind.css' // 干啥的 27min

createApp(App).mount('#app')

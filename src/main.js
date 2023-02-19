import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import moment from 'moment'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { routes } from './router/index'
import './assets/style.css'
import App from './App.vue'

moment.locale('id')

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$moment = moment

const router = createRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  history: createWebHashHistory(),
  routes,
})

app.use(Vue3Toasity, {
  autoClose: 1000,
})
app.use(pinia)
app.use(router)
app.use(ContextMenu)
app.mount('#app')

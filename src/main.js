import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router/index'
import './assets/style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const router = createRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  history: createWebHashHistory(),
  routes,
})

app.use(pinia)
app.use(router)
app.mount('#app')

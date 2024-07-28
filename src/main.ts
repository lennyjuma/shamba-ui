import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from 'highcharts-vue'
// import function to register Swiper custom elements

import App from './App.vue'
import router from './router'
// register Swiper custom elements

const app = createApp(App)

app.use(createPinia())
app.use(HighchartsVue)
app.use(router)

app.mount('#app')

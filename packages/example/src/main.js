import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// tailwindcss
import './assets/css/main.css'


const app = createApp(App)
  .use(router)
  .use(store);

app.mount('#app')
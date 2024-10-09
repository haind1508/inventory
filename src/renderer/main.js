/**
 * Vue setup
 */
import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import './style.css'

/**
 * Vue install
 */
const app = createApp(App)

// setup
app.use(VueCookies, { expire: '7d' })
    .use(router)

// add component

app.mount('#app')

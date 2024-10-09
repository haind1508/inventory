/**
 * Vue setup
 */
import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import i18n from "@/i18n"

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
    .use(i18n)

// add component

app.mount('#app')

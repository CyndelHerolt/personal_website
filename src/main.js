import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(VueScrollTo, {
    container: "body",
    duration: 800,
    easing: "ease in out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
app.use(router)

app.mount('#app')

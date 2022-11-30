import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'flowbite';
import router from './router'
import App from './App.vue'

const pinia = createPinia()

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

createApp(App).use(router).use(pinia).mount('#app')

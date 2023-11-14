import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vueAxios from 'vue-axios'
import axios from 'axios'

import {createPinia} from 'pinia'
import persistence from 'pinia-plugin-persistence';

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@popperjs/core/dist/umd/popper.min.js'

// Configuration to axios

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const pinia = createPinia()
pinia.use(persistence)
pinia.use(({store}) => {
    store.axios = axios
})

const app = createApp(App)
app.use(pinia)
app.use(vueAxios, axios)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

import axios from "axios";
console.log('d');
const Axios = axios.create({
    baseURL : 'http://cinegest.nicolasbarbey.fr/api/1',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

console.log('ds')

app.mount('#app')

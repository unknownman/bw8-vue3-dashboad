import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
    console.error(`error in application in ${instance.name} : ${info}`, err)
}
app.config.globalProperties.$locale = "fa"
app.config.globalProperties.$log = (...params) => {
    console.log(params)
}
app.mount('#app')

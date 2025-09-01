import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()


createApp(App).mount('#app')

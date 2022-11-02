import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '..//bootstrap-5.1.3-dist/css/bootstrap.min.css'
import 'bootstrap'




createApp(App).use(store).use(router).mount('#app')
createApp(App).use(VueAxios, axios)
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.api_key = Vue.prototype.api_key = 'a03159b194fd4686aa98db8df28aa3a7';


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
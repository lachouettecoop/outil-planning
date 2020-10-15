import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import "@/assets/global.css"

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(require('vue-cookies'))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

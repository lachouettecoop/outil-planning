import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import '@/assets/global.css'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(axios)

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://adminchouettos.lachouettecoop.fr/';

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import TakePosition from '../views/TakePosition.vue'
import WatchPlanning from '../views/WatchPlanning.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/takePosition',
    name: 'takePosition',
    component: TakePosition
  },
  {
    path: '/watchPlanning',
    name: 'watchPlanning',
    component: WatchPlanning
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

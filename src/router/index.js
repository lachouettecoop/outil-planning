import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TakePosition from '../views/TakePosition.vue'
import WatchPlanning from '../views/WatchPlanning.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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

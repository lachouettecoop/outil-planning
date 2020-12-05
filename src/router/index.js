import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TakePosition from '../views/TakePosition.vue'
import WatchPlanning from '../views/WatchPlanning.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/takePosition',
    name: 'takePosition',
    component: TakePosition,
    meta: { requiresAuth: true }
  },
  {
    path: '/watchPlanning',
    name: 'watchPlanning',
    component: WatchPlanning,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  var currentUser = store.getters.isAuthenticated
  // when route requires auth and there's no current user, reidrect to '/login'
  if (requiresAuth && !currentUser) {
    next('/login')
    // when we go to login route and are already logged in, we can skip this page
    // so we redirect to the homepage
  } else if (to.path == '/login' && currentUser) {
    next('/')
    // if none of the above matches, we have a normal navigation that should just go through
    // so we call `next()`
  } else {
    next()
  }
})

export default router

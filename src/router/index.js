import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'
import * as types from '@/store/types'
import Index from '@/views/index.vue'
import Repository from '@/views/repository.vue'
import Login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Index,
  },
  {
    path: '/repository',
    name: 'repository',
    meta: {
      requireAuth: true
    },
    component: Repository
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router

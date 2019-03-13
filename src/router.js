import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Login from './views/login.vue'
import Pic from './views/pic.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/pic',
      name: 'pic',
      component: Pic
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})


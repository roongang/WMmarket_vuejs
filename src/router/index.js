import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    }
  ]
})

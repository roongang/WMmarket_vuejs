import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: () => import('@/components/HelloWorld'),
        header: () => import('@/components/common/Header'),
        footer: () => import('@/components/common/Footer'),
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login')
    }
  ]
})

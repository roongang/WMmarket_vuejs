import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/LoginView.vue')
  },
  {
    path: '/dealPost/board',
    name: 'dealPostBoard',
    component: () => import('./views/DealPostBoardView.vue')
  },
  {
    path: '/dealPost/save',
    name: 'dealPostSave',
    component: () => import('./views/DealPostSaveView.vue')
  },
  {
    path: '/dealPost/:id',
    name: 'dealPostGet',
    component: () => import('./views/DealPostGetView.vue')
  },
  {
    path: '/dealPost/:id/update',
    name: 'dealPostUpdate',
    component: () => import('./views/DealPostUpdateView.vue')
  },
  {
    path: '/dealPost/card',
    name: 'dealPostCard',
    component: () => import('./views/DealPostCardView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

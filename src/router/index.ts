import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product/index.vue')
    },
    {
      path: '/blogs',
      name: 'blog',
      component: () => import('../views/blog/index.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/index.vue')
    }
  ]
})

export default router

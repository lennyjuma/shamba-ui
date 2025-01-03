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
    },
    {
      path: '/charts',
      name: 'Analytics',
      component: () => import('../views/Analytics/index.vue')
    },
    {
      path: '/tables',
      name: 'Tables',
      component: () => import('../views/tables/index.vue')
    },
    {
      path: '/login',
      name: 'sign in',
      component: () => import('../views/auth/login.vue')
    },
    {
      path: '/register',
      name: 'sign up',
      component: () => import('../views/auth/register.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/profile/shamba_table.vue')
    },
    {
      path: '/edit_farm',
      name: 'Edit Farm',
      component: () => import('../views/profile/edit_shamba.vue')
    },
    {
      path: '/add_farm',
      name: 'Add Farm',
      component: () => import('../views/profile/shamba.vue')
    },
    {
      path: '/ai/:reading_id',
      name: 'ai',
      component: () => import('../views/ai/aiResponse.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings/settings.vue')
    },
    {
      path: '/change_password',
      name: 'change password',
      component: () => import('../views/auth/changePassword.vue')
    },
    {
      path: '/verify/email',
      name: 'verify email',
      component: () => import('../views/verify/Emailverified.vue')
    },
    {
      path: '/verify/otp',
      name: 'verify sms',
      component: () => import('../views/verify/SMSVerify.vue')
    }
  ]
})

export default router

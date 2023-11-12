// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Register.vue'),
    name:'register'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    name:'login',
  },
  {
    path: '/default',
    name: 'default',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/date',
        name: 'Date',
        component: () => import('@/views/Date.vue'),
      },
      {
        path: '/book',
        name: 'Book',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Book.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //process.env.BASE_URL是指从从环境进程中根据运行环境获取的api的base_url
  routes,
})

export default router

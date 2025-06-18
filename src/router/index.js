import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true, // 允许将路由参数作为 props 传递给组件
      component: () => import('../views/EventDetailsView.vue'),
    },
    // {
    //   path: '/event/123',
    //   name: 'event-details',
    //   component: () => import('../views/EventDetailsView.vue'),
    // },
  ],
})

export default router

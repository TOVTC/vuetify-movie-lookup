// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/results/:term',
        name: 'Results',
        component: () => import('@/views/ResultsView.vue'),
        props: true,
      },
      {
        path: '/details/:id',
        name: 'Details',
        component: () => import('@/views/DetailView.vue'),
        props: true,
      },
      {
        path: '/trending',
        name: 'Trending',
        component: () => import('@/views/TrendingView.vue'),
      },
      {
        path: '/popular',
        name: 'Popular',
        component: () => import('@/views/PopularView.vue'),
      },
      {
        path: '/rated',
        name: 'Rated',
        component: () => import('@/views/RatedView.vue'),
      },
      {
        path: '/playing',
        name: 'Playing',
        component: () => import('@/views/PlayingView.vue'),
      },
      {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

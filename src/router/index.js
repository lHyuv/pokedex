import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    path: '/table',
    name: 'PokeTable',

    component: () => import('../views/PokeTable.vue')
  },
  {
    path: '/',
    name: 'PokeSearch',
    component: () => import('../views/PokeSearch.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

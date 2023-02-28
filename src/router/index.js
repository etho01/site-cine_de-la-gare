import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/seancePage/Seance.vue';
import DemandeFilm from '../components/pages/demandePage/Demande.vue';
import login from '../components/pages/login/login.vue';
import user from '../components/pages/login/userInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/DemandeFilm',
      name: 'DemandeFilm',
      component:DemandeFilm
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/register',
      name: 'register',
      component:user
    },
    {
      path: '/user',
      name: 'user',
      component:user
    }
  ]
})

export default router

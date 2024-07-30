import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import UnifolioView from '../views/UnifolioView.vue'
import IntranetView from "@/views/IntranetView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/unifolio',
      name: 'unifolio',
      component: UnifolioView
    },
    {
      path: '/intranet',
      name: 'intranet',
      component: IntranetView
    }
  ], scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})



export default router

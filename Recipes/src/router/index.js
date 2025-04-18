import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchPage from '@/components/SearchPage.vue'
import RecipeDetailView from '@/views/RecipeDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipes/:id',
      name: 'RecipeDetail',
      component: RecipeDetailView,
    },
  ]
})

export default router

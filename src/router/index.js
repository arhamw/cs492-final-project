import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import DangersOfAIMisinformation from '../views/DangersOfAIMisinformationView.vue'
import CombattingAIMisinformation from '../views/CombattingAIMisinformationView.vue'
import Deepfakes from '../views/DeepfakesView.vue'
import AIGeneratedContent from '../views/AIGeneratedContentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/dangers-about-ai', component: DangersOfAIMisinformation },
    { path: '/combatting-ai', component: CombattingAIMisinformation },
    { path: '/deepfakes', component: Deepfakes },
    { path: '/ai-generated-content', component: AIGeneratedContent },
    { path: '/about', component: About }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import QuizesView from '../views/QuizesView.vue'
import QuizView from '../views/QuizView.vue'
import NoteFoundView from '../views/404View.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: QuizesView
    },
    {
      path: '/quizes',
      redirect: '/',   
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: NoteFoundView   
    }
  ]
})

export default router
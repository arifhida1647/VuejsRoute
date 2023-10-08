import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CourseView from '../views/CourseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: AboutView
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '../views/Mainpage.vue'
import UserCreate from '../views/UserCreate.vue'
import Write from '../views/Write.vue'
import Blog from '../views/blog.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Mainpage
  },
  {
    path: '/usercreate',
    name: 'Usercreate',
    component:UserCreate
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:'/write',
    name: 'Write',
    component:Write
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import LowerThird from '../views/LowerThird.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lowerThird',
    component: LowerThird
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

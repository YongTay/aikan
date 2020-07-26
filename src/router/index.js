import Vue from 'vue'
import VueRouter from 'vue-router'
import film from './film'
import cinema from './cinema'
import mine from './mine'

Vue.use(VueRouter)

  const routes = [
    film,
    cinema,
    mine
  ]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

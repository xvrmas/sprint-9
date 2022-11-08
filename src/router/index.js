import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/showFilms',
    name: 'ShowFilms',
    component: () => import('../views/showFilms.vue')
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/showInfoFilm',
    name: 'showInfoFilm',
    component: () => import('../views/showInfoFilm.vue')
  },
  {
    path: '/storeView',
    name: 'storeView',
    component: () => import('../views/storeView.vue')
  },
  {
    path: '/CheckOut',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from "firebase/auth"

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
    component: () => import('../views/storeView.vue'),
    meta: {
      autenticacion: true
    }
  },
  {
    path: '/CheckOut',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue'),
   
  },
  {
    path: '/farewellPage',
    name: 'farewellPage',
    component: () => import('../views/farewellPage.vue'),
   


  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  let usuario = auth.currentUser;
  let autorizacion = to.matched.some(record => record.meta.autenticacion);
  if (autorizacion && !usuario) {
    next('/LoginPage')
  } else if (!autorizacion && usuario) {
    next()
  } else { next(); }

});

export default router

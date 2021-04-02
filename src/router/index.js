import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/users/Register.vue'
import AllDogs from '../views/dogs/AllDogs.vue'
import AddDog from '../views/dogs/AddDog.vue'
import DogDetail from '../views/dogs/DogDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
    {
    path: '/dogs',
    name: 'AllDogs',
    component: AllDogs
  },
    {
    path: '/dog/:id',
    name: 'DogDetail',
    component: DogDetail,
    props: true
  },
    {
    path: '/dog/add',
    name: 'AddDog',
    component: AddDog,
    props: true
  },
  // redirect
  {
  path: '/all-dogs',
  redirect: '/dogs'
  },
  // catch-all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

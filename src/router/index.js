import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/users/Register.vue'
import AllDogs from '../views/dogs/AllDogs.vue'
import AddDog from '../views/dogs/AddDog.vue'
import EditDog from '../views/dogs/EditDog.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/dogs/:id',
    name: 'EditDog',
    component: EditDog,
    props: true
  },
    {
    path: '/dogs/add',
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

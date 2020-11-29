import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    component: Profile
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

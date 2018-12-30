// Add Vue globals.
import Vue from './vue.js'

// ES6 Component Imports
import { Home } from './components/home.js'
import { Navbar } from './components/navbar.js'
import { NotFound } from './components/not-found.js'
import { Details } from './components/details.js'

// ES6 Template Imports
import { MainTemplate } from './templates/main-template.js'

Vue.use(VueRouter)

// Router
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home,
    name: 'Home Page',
    meta: { title: 'Home' },
  },
  {
    path: '/details',
    component: Details,
    name: 'Details Page',
    meta: { title: 'Details' }
  },
  {
    path: '*',
    component: NotFound,
    meta: { title: 'Page not Found' },
  }
  ]
})

// Change the title based on the page name
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Happy Weather`
  next()
})

new Vue({
  el: '#app',
  components: {
    'navbar': Navbar
  },
  router,
  template: MainTemplate
})

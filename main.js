// Add Vue globals.
import Vue from './vue.js'

// ES6 Component Imports
import {
  Home
} from './components/home.js'
import {
  Navbar
} from './components/navbar.js'
import {
  NotFound
} from './components/not-found.js'
import {
  Details
} from './components/details/details.js'

// ES6 Template Imports
import {
  MainTemplate
} from './templates/main-template.js'

// Child Imports
import {
  Boxes
} from './components/details/boxes.js'
import {
  QuerySelect
} from './components/details/query-select.js'
import { CurrentWeather } from './components/details/current-weather.js';
import { Queries } from './components/queries/queries.js';

Vue.use(VueRouter)

// Router
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home,
    name: 'Home Page',
    meta: {
      title: 'Home'
    },
  },
  {
    path: '/details',
    component: Details,
    name: 'Details Page',
    meta: {
      title: 'Details'
    },
    children: [{
      path: 'boxes',
      name: 'box-comparison',
      component: Boxes,
      meta: {
        title: 'Box Comparison'
      },
    },
    {
      path: 'select',
      name: 'query-select',
      component: Queries,
      meta: {
        title: 'Query Select'
      },
    },
    {
      path: 'current',
      name: 'current-weather',
      component: CurrentWeather,
      meta: {
        title: 'Current Weather'
      },
    }
    ]
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Page not Found'
    },
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
  mounted: function () {
    this.$root.$on('toast', message => {
      this.toastMessage = message

      setTimeout(() =>
      this.toastMessage = "",
      3000);
    })
    
  },
  data: function () {
    return {
      toastMessage: ""
    }
  },
  router,
  template: MainTemplate
})
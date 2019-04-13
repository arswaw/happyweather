import { isLocalhost } from './globals.js'

import Vue from './vue.js'

import { MainTemplate } from './templates/main-template.js'
import Navbar from './components/navbar.js'

Vue.use(VueRouter)

window.onscroll = () => {
  const subnav = document.getElementById("subnav")
  const pageIsAtTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

  if (subnav && pageIsAtTop !== 0) {
    subnav.style.width = "18%"
    subnav.style.borderRadius = "5px 0px 0px 5px"
  }
  else if (subnav && pageIsAtTop === 0) {
    subnav.style.width = "50%"
    subnav.style.borderRadius = "0px 0px 0px 5px"
  }
}

// Router
const router = new VueRouter({
  routes: [{
    path: '/',
    component: () => import('./components/home.js'),
    name: 'Home Page',
    meta: {
      title: 'Home'
    },
  },
  {
    path: '/character',
    component: () => import('./components/character/character.js'),
    name: 'Characters Page',
    meta: {
      title: 'Characters'
    },
    children: [
      {
        path: "gamestate",
        component: () => import('./components/character/views/game-state.js'),
        props: true,
        name: 'Game State Route',
        meta: {
          title: 'Game State'
        }
      },
      {
        path: "charactermain",
        component: () => import('./components/character/views/character-main.js'),
        props: true,
        name: 'Character Main Route',
        meta: {
          title: 'Character'
        }
      },
      {
        path: "statspage",
        component: () => import('./components/character/views/stats.js'),
        props: true,
        name: "Stats Route",
        meta: {
          title: "Stats Page"
        }
      },
      {
        path: "attacks",
        component: () => import('./components/character/views/attacks.js'),
        props: true,
        name: "Attacks Route",
        meta: {
          title: "Attacks Page"
        }
      },
      {
        path: "personality",
        component: () => import('./components/character/views/personality.js'),
        props: true,
        name: "Personality Route",
        meta: {
          title: "Personality Page"
        }
      },
      {
        path: "features",
        component: () => import('./components/character/views/game-features.js'),
        props: true,
        name: "Game Features Route",
        meta: {
          title: "Game Features"
        }
      },
      {
        path: "equipment",
        component: () => import('./components/character/views/equipment.js'),
        props: true,
        name: "Equipment Route",
        meta: {
          title: "Equipment"
        }
      },
      {
        path: "creatormenu",
        component: () => import('./components/character/creator-menu.js'),
        props: true,
        name: "Creator Menu Route",
        meta: {
          title: "Creator Menu"
        }
      }
    ]
  },
  {
    path: '/details',
    component: () => import('./components/details/details.js'),
    name: 'Details Page',
    meta: {
      title: 'Details'
    },
    children: [{
      path: 'boxes',
      name: 'box-comparison',
      component: () => import('./components/details/boxes.js'),
      meta: {
        title: 'Box Comparison'
      },
    },
    {
      path: 'select',
      name: 'query-select',
      component: () => import('./components/queries/queries.js'),
      meta: {
        title: 'Query Select'
      },
    },
    {
      path: 'current',
      name: 'current-weather',
      component: () => import('./components/details/current-weather.js'),
      meta: {
        title: 'Current Weather'
      },
    }
    ]
  },
  {
    path: '*',
    component: () => import('./components/not-found.js'),
    meta: {
      title: 'Page not Found'
    },
  }
  ]
})

// Change the title based on the page name
router.beforeEach((to, from, next) => {
  const subnav = document.getElementById("subnav")
  if (subnav) {
    subnav.style.display = "none"
  }
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
      toastMessage: "",
      isLocalhost: isLocalhost
    }
  },
  router,
  template: MainTemplate
})

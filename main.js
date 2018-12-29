// Add Vue global.
import Vue from './vue.js'

// ES6 Component Imports
import { Queries } from './components/queries.js'
import { Places } from './components/places.js'

// ES6 Template Imports
import { MainTemplate } from './templates/main-template.js'

new Vue({
  el: '#app',
  components: {
    'queries': Queries,
    'places': Places
  },
  template: MainTemplate
})

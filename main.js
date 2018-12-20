// ES6 Component Imports
import { Queries } from './components/queries.js'
import { Places } from './components/places.js'

// ES6 Template Imports
import { MainTemplate } from './templates/main-template.js'

// Environment Variables
const APIURL = 'http://18.222.95.139:3000'

new Vue({
  el: '#app',
  components: {
    'queries': Queries,
    'places': Places
  },
  template: MainTemplate
})

export {
  APIURL
}

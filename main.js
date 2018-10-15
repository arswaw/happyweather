// ES6 Imports
import Queries from './components/queries.js'
import Places from './components/places.js'

// Environment Variables
const APIURL = 'http://18.191.127.35:443'

new Vue({
  el: '#app',
  components: {
    'queries': Queries,
    'places': Places
  },
  template: '#main-template'
})

export {
  APIURL
}
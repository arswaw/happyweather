// ES6 Imports
import Queries from './components/queries.js'
import Places from './components/places.js'

// Environment Variables
const APIURL = 'http://18.191.127.35:443'

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    test: [],
    place: "",
    error: "",
    places: "",
    showAutocomplete: false,
    autoCompleteString: "",
    queries: []
  },
  components: {
    'queries': Queries,
    'places': Places
  },
  methods: {
    async contactServer() {
      try {
        const response = await fetch(`${APIURL}/test`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': "POST"
          },
          mode: 'cors',
          body: JSON.stringify({
            date: new Date(),
            city: "South Bend",
            coords: {
              "type": "Point",
              "coordinates": [41.6746991, -86.345924],
              "state": "IN"
            }
          })
        })

        if (response.status === 200) {
          this.status = "Sent!"
        }

      } catch (err) {
        console.error("Error with retrieving data", err)
      }
    },
    async onPlaceType() {
      console.info("place", this.place)
    }
  },
  watch: {
    async place(value) {
      const response = await fetch(`${APIURL}/text?place=${value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': "GET"
        },
        mode: 'cors',
      })

      this.places = await response.json()

      if (this.places.status === "ZERO_RESULTS") {
        this.showAutocomplete = true
      }
      if (this.places.status === "OK") {

      }

      console.info("places", this.places)
    }
  },
  template: '#main-template'
})

export {
  APIURL
}
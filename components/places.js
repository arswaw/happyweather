import { PlacesTemplate } from '../templates/places-template.js'
import {
  APIURL
} from '../globals.js'

const Places = {
  template: PlacesTemplate,
  data: function () {
    return {
      place: "",
      places: [],
      showTypeBanner: false,
      showLocationBanner: false,
      showPredictButton: false,
      showSelectLocationButton: false,
      showLocationInput: true,
      requester: "",
      errorText: ""

    }
  },
  methods: {
    submitQuery() {
      this.$root.$emit('toast', "Query sent! Now awaiting prediction.")
    },
    async contactServer() {

      if (!this.place || !this.requester) {
        this.errorText = "You need to specify a requester."
        return
      }

      this.errorText = ""

      try {
        const response = await axios.post(`${APIURL}/query`, JSON.stringify({
          date: new Date(),
          city: this.places.results[0].formatted_address,
          shortName: this.places.results[0].name,
          coords: {
            "type": "Point",
            "coordinates": [
              this.places.results[0].geometry.location.lng,
              this.places.results[0].geometry.location.lat,
            ],
            "state": "IN"
          },
          requester: this.requester,
          placeID: this.places.results[0].place_id
        })
        )

        if (response.status === 200) {
          this.$root.$emit('RefreshQueries')
          this.showPredictButton = false
          this.requester = ""
          this.place = ""
          this.showLocationInput = true
        }

      } catch (err) {
        console.error("Error with retrieving data", err)
      }
    },
    selectLocation() {
      this.showLocationInput = false
      this.showSelectLocationButton = false
      this.showTypeBanner = false
      this.showLocationBanner = false
      this.showPredictButton = true
    }
  }
}

export default Places
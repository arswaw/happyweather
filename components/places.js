import {
    APIURL
} from '../main.js'

const Places = {
    template: '#places-template',
    data: function() {
        return {
            place: "",
            places: [],
            showTypeBanner: false,
            showLocationBanner: false,
            showPredictButton : false,
            showSelectLocationButton: false,
            showLocationInput: true
        }
    },
    methods: {
        async contactServer() {
            console.info("Preparing to contact server")
        },
        selectLocation() {
            this.showLocationInput = false
            this.showSelectLocationButton = false
            this.showTypeBanner = false
            this.showLocationBanner = false
            this.showPredictButton = true
        }
    },
    watch: {
        async place(value) {
          if (!value) {
              this.showLocationBanner = false
              this.showTypeBanner = false
              this.showSelectLocationButton = false
              return
          }
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
            this.showLocationBanner = false
            this.showTypeBanner = true
            this.showSelectLocationButton = false
          }
          if (this.places.status === "OK") {
             this.showLocationBanner = true
             this.showTypeBanner = false,
             this.showSelectLocationButton = true
          }
    
          console.info("places", this.places)
        }
      },
}

export default Places
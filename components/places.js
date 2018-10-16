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
            showLocationInput: true,
            requester: "",
            errorText: ""
            
        }
    },
    methods: {
        async contactServer() {

          if (!this.place || !this.requester) {
            this.errorText = "You need to specify a requester."
            return
          }

          this.errorText = ""

            try {
                const response = await fetch(`${APIURL}/query`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': "POST"
                  },
                  mode: 'cors',
                  body: JSON.stringify({
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
                    requester: this.requester
                  })
                })
        
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
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
  mounted: async function () {
    const response = await fetch(`${APIURL}/query`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': "GET"
      },
      mode: 'cors',
    })

    this.queries = await response.json()
    console.info("queries", this.queries)
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
  template: `
    
    <div class="container">
    <div class="jumbotron">
  <h1 class="display-4">Predict the Weather!</h1>
  <p class="lead">Type in the city you want to predict the weather for. Right now we only support the contiguous United States.</p>
  <hr class="my-4">
  <p>Click the predict button and we'll tell you the weather for the next week in your city.</p>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">City</span>
    </div>
    <input type="text" name="placesinput" v-model="place" @change="onPlaceType" class="form-control" placeholder="Start typing a city" aria-label="Place" aria-describedby="basic-addon1"><button v-on:click="contactServer">Predict</button>
    
</div>
<div v-if="showAutocomplete" class="alert alert-light" role="alert">
  {{places.status !== "OK" ? "Keep Typing..." : places && places.results && places.results[0] && places.results[0].formatted_address}}
  <button v-if="places.status === 'OK'" class="btn btn-primary">Select</button>
</div>
<div v-if="queries.length === 0" class="alert alert-info" role="alert">
  Retrieving queries...
</div>
<div class="list-group" v-for="query in queries" v-if="queries">
<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{{query.geographicalAttributes["city-name"]}}</h5>
    <small>{{query.date}}</small>
  </div><br>
  <div class="card">
  <h5 style="text-align:center">Historical</h5>
  <ul v-for="history of query.historical" class="list-group list-group-flush">
    <li class="list-group-item">
      {{history.day}} with a low of {{history.min}} and a high of {{history.max}}
    </li>
  </ul><br>
  <h5 style="text-align:center">Predictions</h5>
  <ul v-for="prediction of query.predictions" v-if="query.predictions.length > 0" class="list-group list-group-flush">
    <li class="list-group-item">
      {{prediction.day}} with a low of {{prediction.min}} and a high of {{prediction.max}}
    </li>
  </ul>
  <p v-if="query.predictions.length === 0">
    Predictions not ready yet.
  </p>
  </div>
</a>
<br>
</div>
<div v-if="error" class="alert alert-danger" role="alert">
{{error}}
</div></div></div>`
})
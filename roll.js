(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.myBundle = {})));
}(this, (function (exports) { 'use strict';

    const Queries = {
        data: function () {
            return {
                queries: []
            }
        },
        created: async function () {
                const response = await fetch(`${APIURL}/query`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Methods': "GET"
                    },
                    mode: 'cors',
                });

                this.queries = await response.json();
                console.info("queries from queries.js", this.queries);
            },
            template: '#queries-template'
    };

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
                requester: ""
            }
        },
        methods: {
            async contactServer() {
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
                        city: this.places.results[0].name,
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
                    });
            
                    if (response.status === 200) {
                      this.status = "Sent!";
                    }
            
                  } catch (err) {
                    console.error("Error with retrieving data", err);
                  }
            },
            selectLocation() {
                this.showLocationInput = false;
                this.showSelectLocationButton = false;
                this.showTypeBanner = false;
                this.showLocationBanner = false;
                this.showPredictButton = true;
            }
        },
        watch: {
            async place(value) {
              if (!value) {
                  this.showLocationBanner = false;
                  this.showTypeBanner = false;
                  this.showSelectLocationButton = false;
                  return
              }
              const response = await fetch(`${APIURL}/text?place=${value}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Methods': "GET"
                },
                mode: 'cors',
              });
          
              this.places = await response.json();
        
              if (this.places.status === "ZERO_RESULTS") {
                this.showLocationBanner = false;
                this.showTypeBanner = true;
                this.showSelectLocationButton = false;
              }
              if (this.places.status === "OK") {
                 this.showLocationBanner = true;
                 this.showTypeBanner = false,
                 this.showSelectLocationButton = true;
              }
        
              console.info("places", this.places);
            }
          },
    };

    // ES6 Imports

    // Environment Variables
    const APIURL = 'http://18.191.127.35:443';

    new Vue({
      el: '#app',
      components: {
        'queries': Queries,
        'places': Places
      },
      template: '#main-template'
    });

    exports.APIURL = APIURL;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

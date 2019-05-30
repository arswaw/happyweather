import { BoxesTemplate } from '../../templates/details/boxes-template.js'

import Box  from './box.js'
import BoxesInfo from './boxes-info.js'
import AddQuery from './add-query.js';

import { isLocalhost } from '../../globals.js'

const Boxes = {
    props: ['query'],
    mounted: function() {
      this.$root.$on('addToCompare', item => {
        this.grid.push(item)
      })
    },
    template: BoxesTemplate,
    created: function() {
        console.info("query in boxes", this.query)
        if (!isLocalhost) {
            this.grid = []
            this.grid.push(this.query)
        }
    },
    data: function() {
        return {
            grid: [
              {
                "geographicalAttributes": {
                  "city-name": "New Paris, IN 46553, USA",
                  "elevation": 200,
                  "latitude": 41.5033572,
                  "longitude": -85.8307059,
                  "state": "IN"
                },
                "_id": "asdfkl;'kas;ejf;ajs",
                "date": "2018-11-09T18:56:41.546Z",
                "uuid": "cb453f52-2fdf-4a1c-b034-c9ae1cd27fef",
                "historical": [
                  {
                    "_id": "5be5d8695b403a129dc48f08",
                    "day": "Sunday",
                    "date": "2018-10-04T00:00:00.000Z",
                    "min": 45.14,
                    "max": 58.7525
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f07",
                    "day": "Monday",
                    "date": "2018-10-05T00:00:00.000Z",
                    "min": 51.7325,
                    "max": 62.645
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f06",
                    "day": "Tuesday",
                    "date": "2018-10-06T00:00:00.000Z",
                    "min": 53.4875,
                    "max": 63.1175
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f05",
                    "day": "Wednesday",
                    "date": "2018-10-07T00:00:00.000Z",
                    "min": 48.3575,
                    "max": 69.035
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f04",
                    "day": "Thursday",
                    "date": "2018-10-08T00:00:00.000Z",
                    "min": 46.715,
                    "max": 76.2575
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f03",
                    "day": "Friday",
                    "date": "2018-10-09T00:00:00.000Z",
                    "min": 48.38,
                    "max": 71.6225
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f02",
                    "day": "Saturday",
                    "date": "2018-10-10T00:00:00.000Z",
                    "min": 38.2325,
                    "max": 63.7475
                  }
                ],
                "shortName": "New Paris",
                "isGreaterThanOneMonth": false,
                "isGreaterThanOneWeek": false,
                "isGreaterThanOneYear": false,
                "numberOfPredictedDays": 7,
                "predictions": [
                  {
                    "_id": "5be5d8695b403a129dc48f0f",
                    "day": "Sunday",
                    "date": "2018-10-11T00:00:00.000Z",
                    "min": 42.8675,
                    "max": 71.7125
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f0e",
                    "day": "Monday",
                    "date": "2018-10-12T00:00:00.000Z",
                    "min": 53.2175,
                    "max": 74.21
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f0d",
                    "day": "Tuesday",
                    "date": "2018-10-13T00:00:00.000Z",
                    "min": 47.795,
                    "max": 65.39
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f0c",
                    "day": "Wednesday",
                    "date": "2018-10-14T00:00:00.000Z",
                    "min": 41.7425,
                    "max": 59.1125
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f0b",
                    "day": "Thursday",
                    "date": "2018-10-15T00:00:00.000Z",
                    "min": 39.8525,
                    "max": 61.475
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f0a",
                    "day": "Friday",
                    "date": "2018-10-16T00:00:00.000Z",
                    "min": 38.8625,
                    "max": 58.9775
                  },
                  {
                    "_id": "5be5d8695b403a129dc48f09",
                    "day": "Saturday",
                    "date": "2018-10-17T00:00:00.000Z",
                    "min": 34.52,
                    "max": 50.495
                  }
                ],
                "rangeFrom": "2018-11-09T00:00:00.000Z",
                "rangeTo": "2018-11-16T00:00:00.000Z",
                "requester": "/u/arswaw",
                "placeID": "ChIJpTbHbhWTFogRrTx0P_8hmAs",
                "actual": [],
                "__v": 0
              }
            ]
        }
    },
    components: {
        'box': Box,
        'boxes-info': BoxesInfo,
        'add-query': AddQuery
    }
}

export default Boxes
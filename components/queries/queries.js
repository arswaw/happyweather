// State
import GetQueries from '../../state/getQueries.js'

// Components
import { QueriesTemplate } from '../../templates/queries/queries-template.js'
import QueriesGrid from './queries-grid.js'
import CollapsePopup from '../collapse-popup.js'

const Queries = {
    props: ['isDetails'],
    components: {
        'queries-grid': QueriesGrid,
        'collapse-popup': CollapsePopup
    },
    mounted: function() {
        this.$root.$on('popup', index => {
            this.selectedQuery = this.queries[index]
            this.$root.$emit('open-popup')
        })
        this.$root.$on('close-popup', () => {
            this.selectedQuery = {}
        })
    },
    data: function() {
        return {
            queries: [],
            status: "",
            showFullQuery: false,
            modalTitle: "",
            showHistorical: false,
            showPredicted: false,
            showActual: false,
            selectedQuery: {},
            modalQuery: {},
            showSpinner: true,
            filterByRequester: ""
        }
    },
    methods: {
        refreshWithMockData() {
            this.queries = [{
                "requester": "Alex Otten",
                "geographicalAttributes": {
                    "city-name": "Lansing",
                    "elevation": 10,
                    "latitude": 12,
                    "longitude": 24,
                    "state": "Michigan"
                },
                "date": new Date(),
                "uuid": "abcd",
                "shortName": "Weather Test",
                "isGreaterThanOneWeek": false,
                "isGreaterThanOneMonth": false,
                "isGreaterThanOneYear": false,
                "numberOfPredictedDays": false,
                "rangeFrom": new Date(),
                "rangeTo": new Date("1/10/2021"),
                "version": "1.0",
                "placeID": "1234",
                "historical": [{
                    "day": "Monday",
                    "date": new Date(),
                    "min": 0,
                    "max": 4
                }],
                "predictions": [{
                    "day": "Tuesday",
                    "date": new Date(),
                    "min": 0,
                    "max": 8
                }],
                "actual": [{
                    "day": "Wednesday",
                    "date": new Date(),
                    "min": 0,
                    "max": 12
                }]
            }]
            this.$root.$emit('toast', "Refreshed query list with test data!")
            this.showSpinner = false
        },
        async refresh() {
            this.queries = []
            this.showSpinner = true
            const response = await GetQueries(this.filterByRequester)

            if (!this.queries) {
                return
            }

            this.queries = response

            this.$root.$emit('toast', "Refreshed query list!")
            this.showSpinner = false
        },
    },
    created: async function() {
        this.refreshWithMockData()
        //await this.refresh()
        this.$root.$on('RefreshQueries', () => {
            this.refreshWithMockData()
            //this.refresh()
        })
    },
    template: QueriesTemplate
}

export default Queries

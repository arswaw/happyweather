import {
    APIURL
} from '../main.js'

import { QueriesTemplate } from '../templates/queries-template.js'

const Queries = {
    data: function () {
        return {
            queries: [],
            status: "",
            showFullQuery: false,
            modalTitle: "",
            showHistorical: false,
            showPredicted: false,
            showActual: false,
            modalQuery: {}
        }
    },
    methods: {
        async refresh() {
            const response = await fetch(`${APIURL}/query`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': "GET"
                },
                mode: 'cors',
            })

            if (response.status !== 200) {
                this.status = "There was an error retrieving queries."
                setTimeout(() => {
                    this.status = ""
                }, 3000)
            }

            this.queries = await response.json()
            console.info("queries from queries.js", this.queries)
            this.status = "Refreshed!"
            setTimeout(() => {
                this.status = ""
            }, 3000)
        },
        popup(index) {
            const query = this.queries[index]
            console.info("Popping up with index", index, query)
            this.showFullQuery = true
            this.modalQuery = query
            this.modalTitle = `${query.geographicalAttributes["city-name"]} from ${query.requester}`
        },
        determineCollapse(section) {
            // Taking the easy way out
            switch (section) {
                case "historical":
                    this.showHistorical = true
                    this.showPredicted = false
                    this.showActual = false
                    break
                case "predicted":
                    this.showHistorical = false
                    this.showPredicted = true
                    this.showActual = false
                    break
                case "actual":
                    this.showHistorical = false
                    this.showPredicted = false
                    this.showActual = true
            }
        }
    },
    created: function () {
        this.refresh()
        this.$root.$on('RefreshQueries', () => {
            this.refresh()
        })
    },
    template: QueriesTemplate
}

export { Queries }
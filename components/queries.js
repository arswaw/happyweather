import {
    APIURL
} from '../globals.js'

import { QueriesTemplate } from '../templates/queries-template.js'
import { QueriesGrid } from './queries-grid.js'
import { CollapsePopup } from './collapse-popup.js'

const Queries = {
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
    data: function () {
        return {
            queries: [],
            status: "",
            showFullQuery: false,
            modalTitle: "",
            showHistorical: false,
            showPredicted: false,
            showActual: false,
            selectedQuery: {},
            modalQuery: {}
        }
    },
    methods: {
        async refresh() {
            const response = await axios.get(`${APIURL}/query`)

            console.info("response", response)

            if (response.status !== 200) {
                this.status = "There was an error retrieving queries."
                setTimeout(() => {
                    this.status = ""
                }, 3000)
            }

            this.queries = await response.data
            console.info("queries from queries.js", this.queries)
            this.status = "Refreshed!"
            setTimeout(() => {
                this.status = ""
            }, 3000)
        },
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
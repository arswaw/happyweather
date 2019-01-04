// State
import {
    APIURL
} from '../../globals.js'
import { GetQueries} from '../../state/getQueries.js'


// Components
import { QueriesTemplate } from '../../templates/queries/queries-template.js'
import { QueriesGrid } from './queries-grid.js'
import { CollapsePopup } from '../collapse-popup.js'

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
            const response = await GetQueries().next()

            this.queries = response.value
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
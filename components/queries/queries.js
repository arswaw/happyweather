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
            modalQuery: {},
            showSpinner: true,
            filterByRequester: ""
        }
    },
    methods: {
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
    created: async function () {
        await this.refresh()
        this.$root.$on('RefreshQueries', () => {
            this.refresh()
        })
    },
    template: QueriesTemplate
}

export default Queries
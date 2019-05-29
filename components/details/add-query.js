// State
import GetQueries from '../../state/getQueries.js'

// Template
import { AddQueryTemplate } from '../../templates/details/add-query-template.js'

const AddQuery = {
    template: AddQueryTemplate,
    methods: {
        openQueries: function() {
            this.opened = true
        },
        async refresh() {
            this.grid = []
            this.showLoader = true
            const response = await GetQueries(this.filterByRequester)
            this.grid = response
            this.showLoader = false
            this.loaded = true
        },
    },
    data: function() {
        return {
            opened: false,
            grid: [],
            showLoader: false,
            loaded: false,
            filterByRequester: ""
        }
    },
    created: async function() {
        await this.refresh()
    }
}

export default AddQuery
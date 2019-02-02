// State
import { GetQueries} from '../../state/getQueries.js'

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
            const response = await GetQueries(5).next()

            this.grid = response.value
            this.showLoader = false
            this.loaded = true
        },
    },
    data: function() {
        return {
            opened: false,
            grid: [],
            showLoader: false,
            loaded: false
        }
    },
    created: async function() {
        await this.refresh()
    }
}

export { AddQuery }
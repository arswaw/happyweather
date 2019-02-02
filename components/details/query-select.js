import { QuerySelectTemplate } from '../../templates/details/query-select-template.js'

// State
import { GetQueries } from '../../state/getQueries.js' 

const QuerySelect = {
    template: QuerySelectTemplate,
    data: function() {
        return {
            queries: {},
            showQuerySelect: false
        }
    },
    mounted: async function() {
        const response = await GetQueries(5).next()

        this.queries = response.value.slice(0, 4)

        this.showQuerySelect = true
    },
    methods: {
        selectUser: async function() {
            this.showQuerySelect = false
        },
        sendChoiceToParent(query) {
            this.$root.$emit('select-query', query)
        }
    }
}

export { QuerySelect }
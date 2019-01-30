import { QueriesGridTemplate } from '../../templates/queries/queries-grid-template.js'

const QueriesGrid = {
    template: QueriesGridTemplate,
    props: ['query', 'index', 'isDetails'],
    methods: {
        sendQueryToParent(index) {
            this.$root.$emit('popup', index)
        },
        sendChoiceToParent(query) {
            this.$root.$emit('select-query', query)
        },
        sendQueryToDetails() {
            console.info("Sending query to details", this.query)
            this.$root.$emit('select-query', this.query)
        }
    }
}

export { QueriesGrid }
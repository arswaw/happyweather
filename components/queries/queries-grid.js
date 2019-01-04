import { QueriesGridTemplate } from '../../templates/queries/queries-grid-template.js'

const QueriesGrid = {
    template: QueriesGridTemplate,
    props: ['query', 'index'],
    methods: {
        sendQueryToParent(index) {
            this.$root.$emit('popup', index)
        },
        sendQueryToDetails() {
            console.info("Sending query to details", this.query)
            this.$root.$emit('select-query', this.query)
        }
    }
}

export { QueriesGrid }
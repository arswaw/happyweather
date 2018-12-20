import { QueriesGridTemplate } from '../templates/queries-grid-template.js'

const QueriesGrid = {
    template: QueriesGridTemplate,
    props: ['query', 'index'],
    methods: {
        sendQueryToParent(index) {
            this.$root.$emit('popup', index)
        }
    }
}

export { QueriesGrid }
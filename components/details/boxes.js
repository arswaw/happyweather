import { BoxesTemplate } from '../../templates/details/boxes-template.js'

import { Box } from './box.js'

const Boxes = {
    props: ['query'],
    template: BoxesTemplate,
    created: function() {
        console.info("query in boxes", this.query)
        this.grid.push(this.query)
    },
    data: function() {
        return {
            grid: []
        }
    },
    components: {
        'box': Box
    },
    methods: {
        testGenerateNewQuery: function () {
            if (this.grid.length <=4) {
                this.grid.push(JSON.parse(JSON.stringify(this.query)))
            }
        },
        testRemoveNewQuery: function() {
            if (this.grid.length > 1) {
                this.grid.pop()
            }
            
        }
    }
}

export { Boxes }
import { BoxesTemplate } from '../../templates/details/boxes-template.js'

import { Box } from './box.js'
import { BoxesInfo } from './boxes-info.js'
import { AddQuery } from './add-query.js';

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
        'box': Box,
        'boxes-info': BoxesInfo,
        'add-query': AddQuery
    }
}

export { Boxes }
import { DetailsTemplate } from '../../templates/details/details-template.js'

import { CurrentWeather } from '../details/current-weather.js'
import { QuerySelect } from './query-select.js'
import { Boxes } from './boxes.js'
import { Queries } from '../queries/queries.js'

const Details = {
    template: DetailsTemplate,
    components: {
        CurrentWeather,
        QuerySelect,
        Boxes,
        Queries
    },
    data: function() {
        return {
            query: {}
        }
    },
    mounted: function() {
        this.$root.$on('select-query', choice => {
            this.query = choice
            console.info("Received choice", choice)
            
        })
    }
}

export { Details }
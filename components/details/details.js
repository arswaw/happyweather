import { DetailsTemplate } from '../../templates/details/details-template.js'

import { CurrentWeather } from '../details/current-weather.js'

const Details = {
    template: DetailsTemplate,
    components: {
        'current-weather': CurrentWeather
    }
}

export { Details }
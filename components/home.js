import { HomeTemplate } from '../templates/home-template.js'

import { Queries } from './queries/queries.js'
import { Places } from './places.js'

import { Info } from './info.js'
import { CurrentWeather } from './details/current-weather.js';

import { isLocalhost } from '../globals.js'

const Home = {
    template: HomeTemplate,
    components: {
        'queries': Queries,
        'places': Places,
        'info': Info,
        'current-weather': CurrentWeather
    },
    data: function() {
        return {
            isLocalhost: isLocalhost
        }
    }
}

export { Home }
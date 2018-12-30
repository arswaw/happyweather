import { HomeTemplate } from '../templates/home-template.js'

import { Queries } from './queries/queries.js'
import { Places } from './places.js'

import { Info } from './info.js'

const Home = {
    template: HomeTemplate,
    components: {
        'queries': Queries,
        'places': Places,
        'info': Info
    }
}

export { Home }
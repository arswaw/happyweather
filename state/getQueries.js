import { APIURL } from '../globals.js'

async function GetQueries (filter) {
    const response = await fetch(`${APIURL}/query?filter=${filter}`)

    if (response.status !== 200) {
        this.$root.$emit('toast', 'There was an issue retrieving queries.')
        return undefined
    }
    else {
        return response.json()
    }
}

export default GetQueries
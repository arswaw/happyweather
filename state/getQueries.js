import { APIURL } from '../globals.js'

async function* GetQueries (filter) {
    const response = await axios.get(`${APIURL}/query?filter=${filter}`)

    yield response.data
}

export default GetQueries
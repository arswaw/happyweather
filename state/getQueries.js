import { APIURL } from '../globals.js'

async function* GetQueries (ttk) {
    const response = await axios.get(APIURL)

    yield response.data
}

export { GetQueries }
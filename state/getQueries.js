import { APIURL } from '../globals.js'

async function GetQueries (ttk) {
    const response = await axios.get(APIURL)

    return response.data
}

export { GetQueries }
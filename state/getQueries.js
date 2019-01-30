import { APIURL } from '../globals.js'

const GetQueries = async function* () {
    const response = await axios.get(APIURL)
    
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await timeout(2000)

    yield response.data
}

export { GetQueries }
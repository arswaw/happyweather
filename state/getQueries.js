import { APIURL } from '../globals.js'

const GetQueries = async function* () {
    const response = await axios.get(`https://dogh52o8ca.execute-api.us-east-2.amazonaws.com/Staging/`)
    
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await timeout(2000)

    yield response.data
}

export { GetQueries }
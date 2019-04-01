import { APIURL } from '../globals.js'

async function GetCharacter (id) {
    const response = await axios.get(`${APIURL}/character?uuid=${id}`)

    return response.data
}

export { GetCharacter }
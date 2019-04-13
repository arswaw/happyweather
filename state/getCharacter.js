import { APIURL } from '../globals.js'

async function GetCharacter (id) {
    const response = await fetch(`${APIURL}/character?uuid=${id}`)

    return response.json()
}

export default GetCharacter
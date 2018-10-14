import {
    APIURL
} from '../main.js'

const Queries = {
    data: function () {
        return {
            queries: []
        }
    },
    created: async function () {
            const response = await fetch(`${APIURL}/query`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': "GET"
                },
                mode: 'cors',
            })

            this.queries = await response.json()
            console.info("queries from queries.js", this.queries)
        },
        template: '#queries-template'
}

export default Queries
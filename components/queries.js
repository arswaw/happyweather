import {
    APIURL
} from '../main.js'

const Queries = {
    data: function () {
        return {
            queries: [],
            status: ""
        }
    },
    methods: {
        async refresh() {
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
            this.status = "Refreshed!"
            setTimeout(() => {
                this.status = ""
            }, 3000)
        }
    },
    created: function () {
        this.refresh()
        this.$root.$on('RefreshQueries', () => {
            this.refresh()
        })
    },
    template: '#queries-template'
}

export default Queries
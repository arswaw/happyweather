const QueriesTemplate = `
        <div id="queries" v-if="selectedQuery" class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-gray pb-2 mb-0">Recent queries<button v-on:click="refresh" class="btn btn-primary float-right">Refresh</button></h6><br>
            {{status}}
            <div v-if="queries" v-for="(query, index) of queries">
                <queries-grid v-bind:query="query" v-bind:index="index"></queries-grid>
            </div>
            <template v-if="selectedQuery">
                <collapse-popup v-bind:selectedQuery="selectedQuery"></collapse-popup>
            </template>
            <small class="d-block text-right mt-3">
                <a href="#">Back to top</a>
            </small>
        </div>
`

export { QueriesTemplate }
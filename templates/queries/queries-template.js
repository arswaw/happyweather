const QueriesTemplate = /*html*/`
<transition>
<div id="queries" v-if="!showSpinner" class="box home-grid-item queries-grid-container">
    <h3>Recent queries</h3>
    <button v-on:click="refresh">Refresh</button>
    
    <p v-if="status">{{status}}</p>
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
<div class="box home-grid-item" v-else>Loading...</div>
</transition>
`
export { QueriesTemplate }

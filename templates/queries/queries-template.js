const QueriesTemplate = /*html*/`
<transition>
<div id="queries" class="box home-grid-item queries-grid-container">
    <h3>Recent queries</h3>
    <button class="main block" v-on:click="refresh">Refresh</button>
    
    <queries-grid :key="query.uuid" v-if="!showSpinner && queries" v-bind:query="query" v-for="(query, index) of queries" v-bind:index="index"></queries-grid>
    <div class="box home-grid-item" v-if="showSpinner">Loading...</div>
    <template v-if="selectedQuery">
        <collapse-popup v-bind:selectedQuery="selectedQuery"></collapse-popup>
    </template>
    <small class="d-block text-right mt-3">
        <a v-if="!showSpinner" href="#">Back to top</a>
    </small>
</div>
</transition>
`
export { QueriesTemplate }

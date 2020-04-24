const QueriesTemplate = /*html*/`
<div>
<div v-if="isDetails" id="queries-select-info" class="box bottom-margin">
    <p class="text">Search for your query in the box below. Press "Enter."</p>
    <p class="text">Then select "Compare."</p>
    <br>
    <input v-model="filterByRequester" @change="refresh" id="filterQueries" placeholder="Enter your name" type="text">
</div>
<transition>

<div id="queries" class="box home-grid-item queries-grid-container">
    <h3 v-if="!isDetails">Recent Queries</h3>
    <button class="main block" v-on:click="refreshWithMockData">Refresh</button>
    
    <queries-grid :isDetails="isDetails" :key="query.uuid" v-if="!showSpinner && queries" v-bind:query="query" v-for="(query, index) of queries" v-bind:index="index"></queries-grid>
    <div class="box home-grid-item" v-if="showSpinner">Loading...</div>
    <template v-if="selectedQuery">
        <collapse-popup v-bind:selectedQuery="selectedQuery"></collapse-popup>
    </template>
    <small class="d-block text-right mt-3">
        <a v-if="!showSpinner" href="#">Back to top</a>
    </small>
    <small>
        <a href="#/character/creatormenu">Characters</a>
    </small>
</div>
</transition>
</div>
`
export { QueriesTemplate }

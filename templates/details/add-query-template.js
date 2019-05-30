const AddQueryTemplate = /*html*/`
<article>
    <div class="box bottom-margin">
        <button class="main" style="width:100%" @click="openQueries">Add another query</button>
    </div>
    <div v-if="loaded" class="modal">
        <span v-if="!opened">Queries</span>
        <button style="line-height:20px" type="button" @click="opened=!opened" class="close" aria-label="Close">
            <span v-if="opened" aria-hidden="true">&minus;</span>
            <span v-else aria-hidden="true">&plus;</span>
        </button>
        <div v-if="opened">
            <input @change="refresh" v-model="filterByRequester" type="text" placeholder="Enter your name">
            <ul v-for="(item, index) of grid.slice(0, 5)">
                <li class="query-small">
                    {{item.requester}}<br>
                    <button @click="addToCompare(index)" class="main slideup">Add to Compare</button>
                </li>
            </ul>
        </div>
    </div>
</article>
`
export { AddQueryTemplate }

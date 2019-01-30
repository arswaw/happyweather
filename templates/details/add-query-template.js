const AddQueryTemplate = /*html*/`
<article>
    <div class="box bottom-margin">
        <button class="main" style="width:100%" @click="openQueries">Add another query</button>
    </div>
    <div class="modal" @click="opened=!opened">
        <span v-if="!opened">Queries</span>
        <button style="line-height:20px" type="button" @click="opened=!opened" class="close" aria-label="Close">
            <span aria-hidden="true">&minus;</span>
        </button>
        <div v-if="opened">
            <input type="text" placeholder="Filter by requester">
            <ul v-for="item of grid.slice(0, 3)">
                <li class="query-small">
                    {{item.requester}}<br>
                    <button class="main">Add to Compare</button>
                </li>
            </ul>
        </div>
    </div>
</article>
`
export { AddQueryTemplate }

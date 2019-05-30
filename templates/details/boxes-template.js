const BoxesTemplate = /*html*/`
    <div id="boxes">
        <boxes-info></boxes-info>
        <add-query></add-query>
        <div class="boxes-grid">
            <box v-bind:index="index" class="box" v-bind:key="item._id" v-for="(item, index) of grid" v-bind:query="item"></box>
        </div>
    </div>`

export {
    BoxesTemplate
}
const BoxesTemplate = /*html*/`<section>
<boxes-info></boxes-info>
<div class="box" v-for="(item, index) of grid">

    <box v-bind:index="index" v-bind:query="item"></box>
    </div>
</section>`

export {
    BoxesTemplate
}
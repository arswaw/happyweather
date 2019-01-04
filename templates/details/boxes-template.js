const BoxesTemplate = `<section>

<div v-for="(item, index) of grid">
<transition appear
    name="add-new-detail-row-transition"
    enter-active-class="animated slideInDown"
    leave-active-class="animated bounceOutRight"
>
    <box v-bind:index="index" v-bind:query="item"></box>
</transition>
    </div>
<button @click="testGenerateNewQuery">Temp Add New Query</button>
<button @click="testRemoveNewQuery">Temp Remove New Query</button>
</section>`

export {
    BoxesTemplate
}
const BoxesInfoTemplate = /*html*/ `
<transition appear
    name="add-new-detail-row-transition"
    enter-active-class="animated pulse"
    leave-active-class="animated fadeOut"
>
<div v-if="!closed" class="box bottom-margin">
    <button style="line-height:20px;font-size:14px" type="button" @click="closed=true" class="close" aria-label="Close">X</button>
    <h3>Details</h3><br>
    <p class="text">
        Now you can compare various datasets side-by-side.<br>
        You can compare datasets of a single query or multiple queries.
    </p>
</div>
</transition>
`

export { BoxesInfoTemplate }


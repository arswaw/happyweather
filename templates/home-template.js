const HomeTemplate = /*html*/`
<div class="home-grid-container">
<info></info>
<current-weather v-if="isLocalhost"></current-weather>
<places></places>
<queries></queries>
</div>
`

export { HomeTemplate }
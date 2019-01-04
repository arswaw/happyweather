const BoxTemplate = `
<div>

<div v-if="query" class="card-deck">
<div v-bind:class="['card', 'text-white', 'mb-3', cardStyles[index]]" style="max-width: 18rem;">
    <div class="card-header">{{query.shortName}}</div>
        <div class="card-body">
        <h5 class="card-title">{{query.requester}}</h5>
        <p class="card-text">Awaiting real-world weather.</p>
        Created {{new Date(query.date).toDateString()}}
    </div>
    </div>
    <div class="card text-center card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">First Comparison</div>
        <div class="card-body">
        <select class="custom-select" multiple>
            <option selected disabled>Select data to display</option>
            <option value="1">Historical</option>
            <option value="2">Predicted</option>
            <option value="3">Actual</option>
        </select>
        
    </div>
    </div>
    <div class="card text-center card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Second Comparison</div>
        <div class="card-body">
        <select class="custom-select" multiple>
            <option selected disabled>Select data to display</option>
            <option value="1">Historical</option>
            <option value="2">Predicted</option>
            <option value="3">Actual</option>
        </select>
        
    </div>
    </div></div>
    </div>
`

export { BoxTemplate }
const BoxTemplate = /*html*/`
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
        
        <select v-if="choices[0].length<1 && showFirst" @change="determineComparisonDisplay('first')" v-model="choice1" class="custom-select">
            <option selected disabled>Select data to display</option>
            <option value="historical">Historical</option>
            <option value="predictions">Predicted</option>
            <option value="actual">Actual</option>
        </select>
        <ul v-else class="list-group" v-for="compare of query[choices[0]]">
        <transition appear
        name="add-new-detail-row-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
            <li class="list-group-item list-group-item-secondary">Min: <span style="color:blue">{{compare.min}}</span> Max: <span style="color:red">{{compare.max}}</span></li>
        </transition>
            </ul><br>
        <!--<button @click="resetBox('first')" v-if="choices[0].length>1" class="btn btn-primary btn-block">Back</button>-->
    </div>
    </div>
    <div class="card text-center card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Second Comparison</div>
        <div class="card-body">
        <select v-if="choices[1].length<1 && showSecond" @change="determineComparisonDisplay('second')" v-model="choice2" class="custom-select">
            <option selected disabled>Select data to display</option>
            <option value="historical">Historical</option>
            <option value="predictions">Predicted</option>
            <option value="actual">Actual</option>
        </select>

        <ul v-else class="list-group" v-for="compare of query[choices[1]]">
        <transition appear
        name="add-new-detail-row-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
            <li class="list-group-item list-group-item-secondary">Min: <span style="color:blue">{{compare.min}}</span> Max: <span style="color:red">{{compare.max}}</span></li>
        </transition>
            </ul><br>
            <!--<button @click="resetBox('second')" v-if="choices[1].length>1" class="btn btn-primary btn-block">Back</button>-->
    </div>
    </div></div>
    </div>
`

export { BoxTemplate }
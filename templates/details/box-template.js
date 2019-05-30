const BoxTemplate = /*html*/`
<section>
<div v-if="query">
<button @click="removeGridItem(query._id)" class="main" style="width:100%">Remove</button>
    <h4> <strong>{{query.requester}}</strong> - {{query.shortName}} - {{new Date(query.date).toDateString()}}
        
    </h4>
    
        <div>
        
        <span class="status-green" v-if="query && query.predictions.length>0">Predictions available.</span>
        <span class="status-red" v-else>Awaiting predictions.</span>
    </div>
    </div>

    <div>
   
        <div class="card-header">Select Comparison</div>
        <div class="card-body">
        
        <select style="width:100%" v-if="choices[0].length<1 && showFirst" @change="determineComparisonDisplay('first')" v-model="choice1" class="custom-select">
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
    </div>
    </section>
`

export { BoxTemplate }
const QueriesGridTemplate = /*html*/`
<div class="box">
                <img v-if="query.predictions.length === 0" src="http://placehold.it/32/FF0000?text=✓" class="">
                <img v-if="query.predictions.length > 0" src="http://placehold.it/32/008000?text=✓" class="">
                <p class="">
                    <strong class="">{{query.shortName || query.geographicalAttributes["city-name"]}} - {{query["numberOfPredictedDays"]}} days</strong> 
                    <ul class="">
                            <li class="list-item">Creator: {{query.requester}}</li>
                            <li class="list-item">Date: {{new Date(query.date).toDateString()}}</li>
                            <li class="list-item">State: {{query.geographicalAttributes["state"]}}</li>
                            <li class="list-item">Predictions: {{query.predictions.length > 0 ? "Done" : "Awaiting"}}</li>
                            <li class="list-item">Accuracy: Collecting Data</li><br>
                            <li class="list-item"><button v-on:click="sendQueryToParent(index)" class="btn btn-info">Quick View</button></li>      
                          </ul>
                </p>
                
                </div>
`

export { QueriesGridTemplate }
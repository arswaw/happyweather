const QueriesGridTemplate = `
<div class="media text-muted pt-3">
                <img v-if="query.predictions.length === 0" src="http://placehold.it/32/FF0000?text=✓" class="mr-2 rounded">
                <img v-if="query.predictions.length > 0" src="http://placehold.it/32/008000?text=✓" class="mr-2 rounded">
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong class="d-block text-gray-dark">{{query.shortName || query.geographicalAttributes["city-name"]}} - {{query["numberOfPredictedDays"]}} days</strong> 
                    <ul class="list-group">
                            <li class="list-group-item">Creator: {{query.requester}}</li>
                            <li class="list-group-item">Date: {{new Date(query.date).toDateString()}}</li>
                            <li class="list-group-item">State: {{query.geographicalAttributes["state"]}}</li>
                            <li class="list-group-item">Predictions: {{query.predictions.length > 0 ? "Done" : "Awaiting"}}</li>
                            <li class="list-group-item">Accuracy: Collecting Data</li>
                            <li class="list-group-item"><button v-on:click="sendQueryToParent(index)" class="btn btn-info">Quick View</button>
                            <button class="btn btn-info"><router-link to="/details" style="color:white">Detailed View</router-link></button>
                            </li>
                          </ul>
                </p>
                
                </div>
`

export { QueriesGridTemplate }
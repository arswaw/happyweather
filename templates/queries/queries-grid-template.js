const QueriesGridTemplate = /*html*/ `
<div class="box query" v-bind:class="{ 'queries-info-green': query.predictions.length > 0, 'queries-info-red': query.predictions.length === 0}">
               
                    <strong><h3>{{query.shortName || query.geographicalAttributes["city-name"]}} - {{query["numberOfPredictedDays"]}} days</h3></strong> 
                    <ul>
                            <li class="list-item">Creator: {{query.requester}}</li>
                            <li class="list-item">Date: {{new Date(query.date).toDateString()}}</li>
                            <li class="list-item">State: {{query.geographicalAttributes["state"]}}</li>
                            <li class="list-item">Predictions: <span v-bind:class="{'status-green': query.predictions.length > 0, 'status-red': query.predictions.length === 0}">{{query.predictions.length > 0 ? "Done" : "Awaiting"}}</span></li>
                            <li class="list-item">Accuracy: Collecting Data</li><br>
                            <li class="list-item">
                              <button v-if="!isDetails" class="main" v-on:click="sendQueryToParent(index)">Quick View</button>
                              <router-link v-else to="boxes"><button class="main" @click="sendChoiceToParent(query)">Compare</button></router-link>
                            </li>      
                          </ul>
            
                
                </div>
`

export {
  QueriesGridTemplate
}
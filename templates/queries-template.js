const QueriesTemplate = `
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <div v-if="showFullQuery" class="modal" style="display:block;overflow:overlay" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{modalTitle}}</h5>
                            <button type="button" class="close" v-on:click="showFullQuery=false" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                        <button v-on:click="determineCollapse('historical')" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Historical
                                        </button>
                                        </h5>
                                    </div>
                                    <div v-if="showHistorical" id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                    <p v-if="modalQuery.historical.length === 0">No Historical Data.</p>
                                                    <ul v-else class="list-group" v-for="his of modalQuery.historical">
                                                            <li class="list-group-item list-group-item-secondary">Min: <span style="color:blue">{{his.min}}</span> Max: <span style="color:red">{{his.max}}</span></li>
                                                        </ul>
                                            </div>
                                          </div>
                                </div>
                                <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                            <button v-on:click="determineCollapse('predicted')" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Predicted
                                            </button>
                                            </h5>
                                        </div>
                                        <div v-if="showPredicted" id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">
                                                        <p v-if="modalQuery.predictions.length === 0">Awaiting Predictions.</p>
                                                    <ul v-else class="list-group" v-for="pred of modalQuery.predictions">
                                                            <li class="list-group-item list-group-item-secondary">Min: <span style="color:blue">{{pred.min}}</span> Max: <span style="color:red">{{pred.max}}</span></li>
                                                        </ul>
                                                </div>
                                              </div>
                                    </div>
                                    <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h5 class="mb-0">
                                                <button v-on:click="determineCollapse('actual')" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Actual
                                                </button>
                                                </h5>
                                            </div>
                                            <div v-if="showActual" id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                            <p v-if="modalQuery.actual.length === 0">Recording live weather.</p>
                                                    <ul v-else class="list-group" v-for="act of modalQuery.actual">
                                                            <li class="list-group-item list-group-item-secondary">Min: <span style="color:blue">{{act.min}}</span> Max: <span style="color:red">{{act.max}}</span></li>
                                                        </ul>
                                                    </div>
                                                  </div>
                                        </div>   
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" v-on:click="showFullQuery=false" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            <h6 class="border-gray pb-2 mb-0">Recent queries<button v-on:click="refresh" class="btn btn-primary float-right">Refresh</button></h6><br>
            {{status}}
            <article v-if="queries" v-for="(query, index) of queries">
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
                            <li class="list-group-item"><button v-on:click="popup(index)" class="btn btn-info">View</button></li>
                          </ul>
                </p>
                </div>
            </article>
                <small class="d-block text-right mt-3">
                  <a href="#">Back to top</a>
                </small>
        </div>
`

export { QueriesTemplate }
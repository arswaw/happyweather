const CollapsePopupTemplate = /*html*/`

<dialog id="quickView" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{selectedQuery.shortName}}</h5>
                            <button type="button" class="close" v-on:click="sendCloseToParent" data-dismiss="modal" aria-label="Close">
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
                                                    
                                                    <ul v-for="his of selectedQuery.historical">
                                                            <li class="list-item">Min: <span style="color:blue">{{his.min}}</span> Max: <span style="color:red">{{his.max}}</span></li>
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
                                                        
                                                    <ul class="list-group" v-for="pred of selectedQuery.predictions">
                                                            <li class="list-item">Min: <span style="color:blue">{{pred.min}}</span> Max: <span style="color:red">{{pred.max}}</span></li>
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
                                                            
                                                    <ul class="list-group" v-for="act of selectedQuery.actual">
                                                            <li class="list-item">Min: <span style="color:blue">{{act.min}}</span> Max: <span style="color:red">{{act.max}}</span></li>
                                                        </ul>
                                                    </div>
                                                  </div>
                                        </div>   
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" v-on:click="sendCloseToParent" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </dialog>
`

export { CollapsePopupTemplate }
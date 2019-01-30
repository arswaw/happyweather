const CollapsePopupTemplate = /*html*/`
<div id="quickView" v-if="opened" class="modal" tabindex="-1">
<div class="quick-view-grid-container">
<div class="all">


  <div class="quick-view-Title">
    <h3>{{selectedQuery.shortName}}</h3>
    
  </div>
  <div class="quick-view-Close">
  <button type="button" class="close" style="color:black" v-on:click="sendCloseToParent" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&minus;</span>
    </button>
</div>
  <div class="quick-view-Select">
</div>
  <div class="quick-view-List">
    <div v-if="showHistorical" id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
                Predicted
                <ul v-for="his of selectedQuery.predictions">
                        <li class="list-item box">Min: <span style="color:blue">{{his.min}}</span> Max: <span style="color:red">{{his.max}}</span></li>
                    </ul>
        </div>
    </div>
  </div>
  </div>
</div>
                                         
                </div>
`

export {CollapsePopupTemplate}
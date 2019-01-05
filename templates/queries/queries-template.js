const QueriesTemplate = `
    <transition>
        <div id="queries" v-if="!showSpinner" class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-gray pb-2 mb-0">Recent queries<button v-on:click="refresh" class="btn btn-primary float-right">Refresh</button></h6><br>
            <transition appear
    name="add-new-detail-row-transition"
    enter-active-class="animated bounceIn"
    leave-active-class="animated hinge"
>
            <p v-if="status">{{status}}</p>
            </transition>
            <div v-if="queries" v-for="(query, index) of queries">
                <queries-grid v-bind:query="query" v-bind:index="index"></queries-grid>
            </div>
            
            <template v-if="selectedQuery">
                <collapse-popup v-bind:selectedQuery="selectedQuery"></collapse-popup>
            </template>
            <small class="d-block text-right mt-3">
                <a href="#">Back to top</a>
            </small>
        </div>
        <!-- Spinner -->
            <div v-else key="spin" class="card text-center">
            <div class="card-header">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        <!-- Spinner -->
    </transition>
`

export { QueriesTemplate }
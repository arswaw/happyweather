const QuerySelectTemplate = `
    <transition mode="in-out">
    <div v-if="showQuerySelect" key="tabular" class="my-3 p-3 bg-white rounded shadow-sm">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Creator</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(query, index) of queries">
            <th scope="row">{{index+1}}</th>
            <td>{{query.requester}}</td>
            <td>{{query.shortName}}</td>
            <td>{{new Date(query.date).toDateString()}}</td>
            <td @click="sendChoiceToParent(query)"><router-link to="boxes">Go!</router-link></td>
          </tr>
        </tbody>
      </table>
  </div>
  <div v-else key="spin" class="card text-center">
    <div class="card-header">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  </transition>
`

export { QuerySelectTemplate }
const QuerySelectTemplate = `
    <transition mode="in-out">
    <div v-if="showQuerySelect" key="tabular">
      <table>
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
        <nav aria-label="">
  <ul v-if="false" class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
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
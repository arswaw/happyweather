const PlacesTemplate = /*html*/`
    <div class="box home-grid-item">
        <form class="places-grid-container">
            <h3><label for="requesterInput">Your Name</label></h3>
            <input v-model="requester" placeholder="First and/or last" type="text" name="requesterinput" class="form-control" id="requesterInput" aria-describedby="requesterHelp">
            <h3><label class="places-grid-requester-label" for="locationInput">Location</label></h3>
            <input class="places-grid-requester-input" :disabled="!showLocationInput" placeholder="to predict weather for" type="text" name="locationinput" v-model="place" id="locationInput">        
            <button @click="submitQuery" type="button" class="main block">Create Query</button>
        </form>
    </div>
`

export { PlacesTemplate }
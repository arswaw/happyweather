const PlacesTemplate = `

        <div class="my-3 p-3 bg-white rounded shadow-sm">
                <form class="input-group mb-3">
                    <div class="form-group">
                        <label for="requesterInput">Requester</label>
                        <input v-model="requester" placeholder="Your name" type="text" name="requesterinput" class="form-control" id="requesterInput" aria-describedby="requesterHelp">
                        <small id="requesterHelp" class="form-text text-muted">Something to identify your prediction by.</small>
                    </div>
                    <div class="form-group col">
                        <label for="locationInput">Location</label>
                        <input :disabled="!showLocationInput" placeholder="of location to predict weather for" type="text" name="locationinput" v-model="place" class="form-control" id="locationInput">
                    </div>
                                
                </form>
                <div v-if="showTypeBanner" class="alert alert-secondary" role="alert">
                    Keep typing...
                </div>
                <div v-if="showLocationBanner" class="alert alert-secondary" role="alert">
                    {{place && places && places.results[0].formatted_address}}
                </div>
                <button v-if="showSelectLocationButton" class="btn btn-primary btn-lg btn-block" v-on:click="selectLocation">Select Location</button>
                <button v-if="showPredictButton" class="btn btn-primary btn-lg btn-block" v-on:click="contactServer">Predict</button>
                {{errorText}}
            </div>
`

export { PlacesTemplate }
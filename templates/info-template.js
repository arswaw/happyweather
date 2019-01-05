const InfoTemplate = `
<transition appear
    name="add-new-detail-row-transition"
    enter-active-class="animated pulse"
    leave-active-class="animated fadeOut"
>
<div v-if="show" class="my-3 p-3 rounded">
                <div class="my-3 p-3 bg-white rounded shadow-sm">
                <button type="button" @click="show=false" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                    <h6 class="border-gray pb-2 mb-0">Introduction</h6>
                    <p>
                        Welcome to Happy Weather! This is a friendly weather prediction 
                        system based on Machine Learning. Enter a location you want to predict
                        the weather for. In a few minutes your query will display a prediction
                        for 7 days in the future. Later, the real-world weather for those 7
                        days will be collected and will be used to verify the accuracy of the prediction.
                    </p>
                </div>
                </div>
                </transition>
`

export { InfoTemplate }
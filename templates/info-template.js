const InfoTemplate = /*html*/`
<transition appear
    name="add-new-detail-row-transition"
    enter-active-class="animated pulse"
    leave-active-class="animated fadeOut"
>
<header v-if="show" class="box">
                <div>
                <button style="line-height:20px" type="button" @click="show=false" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                    <h3>Introduction</h3><br>
                    <p class="text">
                        Welcome to Happy Weather! This is a friendly weather prediction 
                        system based on Machine Learning. Enter a location you want to predict
                        the weather for. In a few minutes your query will display a prediction
                        for 7 days in the future. Later, the real-world weather for those 7
                        days will be collected and will be used to verify the accuracy of the prediction.
                    </p>
                </div>
                </header>
                </transition>
`

export { InfoTemplate }
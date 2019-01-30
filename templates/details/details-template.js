const DetailsTemplate = /*html*/`
<div><br>
    <transition :appear=true name="slide-fade" mode="out-in">
    <!-- According to docs, true is implicit 
        Not so here, where routing to queries and 
        logging isDetails returns no value
    -->
        <router-view
            :query="query" isDetails="true"
        ></router-view>
    </transition>
</div>
`
export { DetailsTemplate }
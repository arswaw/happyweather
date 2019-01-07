const DetailsTemplate = /*html*/`
<div><br>
    <transition :appear=true name="slide-fade" mode="out-in">
        <router-view
            :query="query"
        ></router-view>
    </transition>
</div>
`
export { DetailsTemplate }
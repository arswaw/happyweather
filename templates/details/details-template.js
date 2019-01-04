const DetailsTemplate = `
<div>
    <nav>
        <router-link to="boxes">Boxes</router-link>
        <router-link to="select">Select</router-link>
    </nav>
    <transition :appear=true name="slide-fade" mode="out-in">
        <router-view
            :query="query"
        ></router-view>
    </transition>
</div>
`
export { DetailsTemplate }
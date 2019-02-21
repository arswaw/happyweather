const MainTemplate = /*html*/ `
<div class="grid-container">
<!--<aside v-if="isLocalhost" class="app-level-alert">Windchill is dangerously low! Stay inside!</aside>-->
<navbar class="grid-item"></navbar>
<div role="main" class="grid-item">
                <main role="main" class="router-padding">
                    <transition :appear=true name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </main> 
        </div>
        <transition appear
        name="add-new-detail-row-transition"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
    >
        <aside v-if="toastMessage" class="toast">{{toastMessage}}</aside>
        </transition>
        </div>
`

export {
    MainTemplate
}
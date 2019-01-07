const MainTemplate = /*html*/ `
<div class="grid-container">
<navbar class="grid-column"></navbar>
<div role="main" class="grid-column">
                <main role="main" class="router-padding">
                    <transition :appear=true name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </main> 
        </div>
        </div>
`

export {
    MainTemplate
}
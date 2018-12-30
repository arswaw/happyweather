const MainTemplate = `
<div>
<navbar></navbar>
<div role="main" class="weather-width">
                <main role="main" class="container">
                    <transition :appear=true name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </main> 
        </div>
        </div>
`

export { MainTemplate }
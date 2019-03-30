const CharacterTemplate = /*html*/ `
    <div>
    <transition appear
        name="character-nav-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown">

        <nav v-if="showMenu" class="character">
            <button  class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/gamestate">Game State</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/charactermain">Character</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/statspage">Stats</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/attacks">Attacks</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/personality">Personality</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/features">Features</a>
            </button>
            <button href="#" class="main block character-nav-text">
                <a class="nav-title" @click="showMenu = !showMenu" href="#/character/equipment">Equipment</a>
            </button>
        </nav>
        </transition>
        
        <button v-if="showWizard" class="main block" @click="showMenu = !showMenu">
            <span v-if="showMenu">Hide Menu</span>
            <span v-else>Show Menu</span>
        </button>

        <hr>

        <div class="wizard" v-if="showWizard">
            <h4>You are on Step {{currentStep.count}} - {{currentStep.description}}</h4>
            <button class="main block">Next</button>
        </div>

        <main class="character-grid">
            <router-view 
                v-bind:state="gameState" 
                v-bind:bio="charBio"
                v-bind:stats="baseStats">
            </router-view>
        </main>
    </div>
`

export {
    CharacterTemplate
}
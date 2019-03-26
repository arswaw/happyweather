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
            <button href="#" class="main block character-nav-text">Attacks</button>
            <button href="#" class="main block character-nav-text">Personality</button>
            <button href="#" class="main block character-nav-text">Features</button>
            <button href="#" class="main block character-nav-text">Equipment</button>
        </nav>
        </transition>
        
        <button class="main block" @click="showMenu = !showMenu">
            <span v-if="showMenu">Hide Menu</span>
            <span v-else>Show Menu</span>
        </button>

        <hr>

        <main class="character-grid">
            <router-view v-bind:state="gameState" v-bind:bio="charBio"></router-view>
        </main>
    </div>
`

export {
    CharacterTemplate
}
const CharacterTemplate = /*html*/ `
    <div>
    <transition appear
        name="character-nav-transition"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown">

        <nav style="z-index:10" v-if="showMenu" class="character">
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
        
        <button v-if="showMenuButton" class="main block" @click="showMenu = !showMenu">
            <span v-if="showMenu">Hide Menu</span>
            <span v-else>Show Menu</span>
        </button>

        <button @click="returnToCreatorMenu" v-if="showMenuButton && !showWizard" class="main block secondary">Return</button>

        <hr v-if="showMenu">

        <div class="wizard" v-if="showWizard">
            <h4>You are on Step {{currentStep.count}} - {{currentStep.description}}</h4>
            <button v-if="currentStep.count+1 !== steps.length" @click="advanceWizard" class="main block">Next</button>
            <button class="main block" v-else>Finish</button>
            <button @click="reverseWizard" v-if="currentStep.count > 1" class="main block secondary">Previous</button>
            <button @click="startWizard(false)" class="main block danger">Exit</button>
        </div>

        <progress v-bind:value="currentStep.progress" max="100" v-if="showWizard"></progress>

        <main class="character-grid">
            <router-view 
                v-bind:state="character.gameState" 
                v-bind:bio="character.charBio"
                v-bind:currentStep="currentStep"
                v-bind:showWizard="showWizard"
                v-bind:isLoading="isLoading"
                v-bind:characterLoaded="characterLoaded"
                v-bind:stats="character.baseStats">
            </router-view>
        </main>
    </div>
`

export {
    CharacterTemplate
}
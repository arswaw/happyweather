const CreatorMenuTemplate =/*html*/`
    <div class="box">
        <h3>Dungeons and Dragons Character Creator</h3><br>

        <p>Welcome to my unofficial D&D character creator
        and game state tracker!</p><br>

        <p>You can access the character creator by pressing
        on the button below</p><br>

        <p class="text">41fb4674-3c27-4c7f-9579-ad25cc43ebd0</p>
        Stinkmeaner
        <p class="text">1f078b32-2596-417d-87ee-e210175f3fc0</p>

        <button class="main block" @click="startWizard">Create a new character!</button>
        <button v-if="currentStep.count > 0" class="main block secondary" @click="returnToWizard">Resume</button>
        <button v-if="currentStep.count > 0" class="main block danger" @click="stopWizard">Cancel</button>
        
        <h4>OR</h4>
        
        <p v-if="characterLoaded">Change the currently loaded character.</p>
        <p v-else>Select an existing character by entering in the id you were provided.</p><br>
        
        <input v-model="characterId" type="text" style="width: 100%;margin-bottom:2%">
        
        <button v-if="characterLoaded" @click="sendIdToCharacter" class="main block">
            {{isLoading ? "Loading" : "Change Character"}}
        </button>
        <button v-else @click="sendIdToCharacter" class="main block">
            {{isLoading ? "Loading" : "Load Character"}}
        </button>
    </div>
`

export { CreatorMenuTemplate }
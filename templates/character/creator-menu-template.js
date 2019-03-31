const CreatorMenuTemplate =/*html*/`
    <div class="box">
        <h3>Dungeons and Dragons Character Creator</h3><br>

        <p>Welcome to my unofficial D&D character creator
        and game state tracker!</p><br>

        <p>You can access the character creator by pressing
        on the button below</p><br>

        <button class="main block" @click="startWizard">Create a new character!</button>
        <h4>OR</h4>
        <a href="#/character/characterselect">Select an existing character!</a>
    </div>
`

export { CreatorMenuTemplate }
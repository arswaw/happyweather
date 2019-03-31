const CharacterMainTemplate = /*html*/`
    <div class="box" style="margin-bottom:8%">
        <h4>Character Bio</h4>
        <ul class="list-group" v-if="!showWizard">
            <li class="list-group-item">Class: {{bio.class}}</li>
            <li class="list-group-item">Level: {{bio.level}}</li>
            <li class="list-group-item">Background: {{bio.background}}</li>
            <li class="list-group-item">Player Name: {{bio.playerName}}</li>
            <li class="list-group-item">Faction: {{bio.faction}}</li>
            <li class="list-group-item">Race: {{bio.race}}</li>
            <li class="list-group-item">Alignment: {{bio.alignment}}</li>
            <li class="list-group-item">Experience Points: {{bio.experiencePoints}}</li>
            <li class="list-group-item">DCI Number: {{bio.DCINumber}}</li>
            <li class="list-group-item">Character Name: {{bio.characterName}}</li>
        </ul>
        <ul class="list-group" v-else>
            <li class="list-group-item form">Class</li>
            <li class="list-group-item form">
                <select style="width: 100%">
                    <option>Sorcerer</option>
                    <option>Rogue</option>
                </select>
            </li>
            <li class="list-group-item form">Level</li>
            <li class="list-group-item form">
                <input style="width: 100%" type="number" placeholder="Enter a number">
            </li>
            <li class="list-group-item form">Background</li>
            <li style="list-style-type: none" class="list-group-item-form">
                <textarea rows="4"></textarea>
            </li>
            <li class="list-group-item form">Player Name</li>
            <li class="list-group-item form">
                <input type="text" placeholder="Your name">
            </li>
            <li class="list-group-item form">Faction</li>
            <li class="list-group-item form">
                <input type="text" placeholder="Enter your faction name">
            </li>
            <li class="list-group-item form">Race</li>
            <li class="list-group-item form">
                <select style="width: 100%">
                    <option>Human</option>
                    <option>Gnome</option>
                </select>
            </li>
            <li class="list-group-item form">Alignment</li>
            <li class="list-group-item form">
                <select style="width: 100%">
                    <option>Chaotic Good</option>
                    <option>True Neutral</option>
                </select>
            </li>
            <li class="list-group-item form">Experience Points</li>
            <li class="list-group-item form">
                <input type="number" placeholder="Enter your XP">
            </li>
            <li class="list-group-item form">DCI Number</li>
            <li class="list-group-item form">
                <input type="number" placeholder="DCI optional">
            </li>
            <li class="list-group-item form">Character Name</li>
            <li class="list-group-item form">
                <input type="text" placeholder="e.g. Gandalf">
            </li>
        </ul>
    </div>
`

export { CharacterMainTemplate }
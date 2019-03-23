const CharacterMainTemplate = /*html*/`
    <div class="box">
        <h4>Character Bio</h4>
        <ul class="list-group">
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
    </div>
`

export { CharacterMainTemplate }
const GameStateTemplate = /*html*/`
    <div class="box">
        <h4>Game State</h4>
        <ul class="list-group">
            <li class="list-item">Armor Class: {{state.armorClass}}</li>
            <li class="list-item">Initiative: {{state.initiative}}</li>
            <li class="list-item">Speed: {{state.speed}},</li>
            <li class="list-item">Maximum Hit Points: {{state.hitPointMaximum}}</li>
            <li class="list-item">Current Hit Points: {{state.currentHitPoints}}</li>
            <li class="list-item">Hit Dice: {{state.hitDice}}</li>
        <ul>

        <h6>Death Saves</h6>
        Successes: {{state.deathSaves.successes}}
        Failures: {{state.deathSaves.failures}}
    </div>
`

export { GameStateTemplate }
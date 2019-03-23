const GameStateTemplate = /*html*/`
    <div class="box">
        <h4>Game State</h4>
        Armor Class: {{state.armorClass}}
        Initiative: {{state.initiative}}
        Speed: {{state.speed}},
        Maximum Hit Points: {{state.hitPointMaximum}}
        Current Hit Points: {{state.currentHitPoints}}
        Hit Dice: {{state.hitDice}}
        
        <h6>Death Saves</h6>
        Successes: {{state.deathSaves.successes}}
        Failures: {{state.deathSaves.failures}}
    </div>
`

export { GameStateTemplate }
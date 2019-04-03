const GameStateTemplate = /*html*/`
    <div class="box game-view" v-if="!showWizard">
        <h4>Game State</h4>
        <ul class="list-group">
            <li class="list-item list-color health">
                <h1 class="health-text reset">{{state.currentHitPoints}}</h1> 
                <button @click="state.currentHitPoints = state.currentHitPoints+=1" class="health-control">▲</button>
                <p style="font-size:15px" class="health-text reset">Current Hit Points</p>  
                <button @click="state.currentHitPoints = state.currentHitPoints-=1" style="line-height:0" class="health-control">▼</button>
            </li>
            <li class="list-item">Armor Class: {{state.armorClass}}</li>
            <li class="list-item">Initiative: {{state.initiative}}</li>
            <li class="list-item">Speed: {{state.speed}},</li>
            <li class="list-item">Maximum Hit Points: {{state.hitPointMaximum}}</li>
            <li class="list-item">Hit Dice: {{state.hitDice}}</li>
        </ul>

        <h6>Death Saves</h6>
        Successes: {{state.deathSaves.successes}}
        Failures: {{state.deathSaves.failures}}
    </div>
    <div class="box game-view" v-else>
        <h4>Game State</h4>
        <ul class="list-group">
            <li class="list-item">Armor Class</li>
            <li class="list-item">
                <input type="number" v-model="state.armorClass">
            </li>
            <li class="list-item">Initiative</li>
            <li class="list-item">
                <input type="number" v-model="state.initiative">
            </li>
            <li class="list-item">Speed</li>
            <li class="list-item">
                <input type="number" v-model="state.speed">
            </li>
            <li class="list-item">Maximum Hit Points</li>
            <li class="list-item">
                <input type="number" v-model="state.hitPointMaximum">
            </li>
            <li class="list-item">Hit Dice</li>
            <li class="list-item">
                <input type="number" v-model="state.hitDice">
            </li>
            <li class="list-item">
                <h4>Death Saves</h4>
            </li>
            <li class="list-item">Successes</li>
            <li class="list-item">
                <input type="number" v-model="state.deathSaves.successes">
            </li>
            <li class="list-item">Failures</li>
            <li class="list-item">
                <input type="number" v-model="state.deathSaves.failures">
            </li>
        </ul>
    </div>
`

export { GameStateTemplate }
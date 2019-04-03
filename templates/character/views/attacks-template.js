const AttacksTemplate =/*html*/`
    <div class="box game-view" v-if="!showWizard">
        <h4>Attacks and Spellcasting</h4>
        <ul class="list-group">
            <li v-for="spell of attacks.spells" class="list-item spell-list-grid spell-list" v-bind:style="{ backgroundColor: getRandomColor() }">
                <h3>{{spell.name}}</h3>
                <h5>Bonus: {{spell.attackBonus}}</h5>
                <p>Damage Type: {{spell.damageType}}</p>
            </li>
        </ul>
        <h4>List of Spells</h4>
        <ul class="list-group">
            <li v-bind:style="{ backgroundColor: getRandomColor() }" class="list-item attack-list" v-for="spell of attacks.list">
                {{spell}}
            </li>
        </ul>
    </div>
    <div class="box game-view" v-else>
        <h4>Attacks and Spellcasting</h4>
        <ul class="list-group">
            <li v-for="spell of attacks.spells" class="list-item spell-list" v-bind:style="{ backgroundColor: getRandomColor() }">
                <h4>Spell: <p><input v-model="spell.name"></p></h4>
                <h4>Attack Bonus: <input v-model="spell.attackBonus"></h4>
                <h4>Damage Type: <input v-model="spell.damageType"></h4>
                <button>Delete</button>
            </li>
        </ul>
        <button class="main block">Add Spell</button>
        <h4>List of Spells</h4>
        <ul class="list-group">
            <li v-bind:style="{ backgroundColor: getRandomColor() }" class="list-item attack-list-grid attack-list" v-for="spell of attacks.list">
                <input v-model="spell"/>
                <button>Delete</button>
            </li>
        </ul>
    </div>
`

export { AttacksTemplate }
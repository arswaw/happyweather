const StatsTemplate =/*html*/
`
<div class="box">
    <h3>Stats</h3>
    <ul class="list-group" v-if="readonly">
        <li class="list-item statbox" v-bind:style="{ backgroundColor: getRandomColor() }" v-for="stat in stats">   
            <h1>{{stat.base}} ({{stat.modifier}})</h1>
            <h3>{{stat.label}}</h3> 
        </li>
    </ul>
    <ul v-else>
        <li class="list-item statbox form" v-bind:style="{ backgroundColor: getRandomColor() }" v-for="stat in stats">   
            <h3>{{stat.label}}</h3><br>
            <label>Base Stat</label>
            <input type="text" placeholder="Base" v-model="stat.base">
            <label>Modifier</label>
            <input type="text" placeholder="Modifier" v-model="stat.modifier">
        </li>
    </ul>
</div>
`

export { StatsTemplate }

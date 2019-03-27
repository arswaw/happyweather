const StatsTemplate =/*html*/
`
<div class="box">
    <ul class="list-group stats">
        <li style="width:120px;" class="list-item" v-for="stat in stats">
            {{stat.label}} - {{stat.base}}
        </li>
    </ul>
</div>
`

export { StatsTemplate }
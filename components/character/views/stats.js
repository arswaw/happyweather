import { StatsTemplate } from "../../../templates/character/views/stats-template.js";

const Stats = {
    props: ['stats', 'showWizard'],
    template: StatsTemplate,
    data: function() {
        return {
            colors: ['red', 'blue', 'cornflowerblue', 'green', 'purple', 'cyan'],
            readonly: false
        }
    },
    methods: {
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * 5)]
        }
    }
}

export default Stats

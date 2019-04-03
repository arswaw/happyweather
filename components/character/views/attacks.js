import { AttacksTemplate } from "../../../templates/character/views/attacks-template.js";

const Attacks = {
    props: ['attacks', 'showWizard'],
    template: AttacksTemplate,
    data: function() {
        return {
            colors: ['red', 'blue', 'cornflowerblue', 'green', 'purple', 'cyan']
        }
    },
    methods: {
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * 5)]
        }
    }
}

export { Attacks }
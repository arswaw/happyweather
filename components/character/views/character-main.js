import { CharacterMainTemplate } from "../../../templates/character/views/character-main-template.js";

const CharacterMain = {
    props: ['bio'],
    data: function() {
        return {
            readonly: false
        }
    },
    template: CharacterMainTemplate
}

export { CharacterMain }
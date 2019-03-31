import { CreatorMenuTemplate } from "../../templates/character/creator-menu-template.js";

const CreatorMenu = {
    props: ['showWizard'],
    template: CreatorMenuTemplate,
    methods: {
        startWizard() {
            this.$root.$emit('showWizard', true)
        }
    }
}

export { CreatorMenu }
import { CreatorMenuTemplate } from "../../templates/character/creator-menu-template.js";

const CreatorMenu = {
    props: ['showWizard', 'currentStep'],
    template: CreatorMenuTemplate,
    mounted: function() {
        this.$root.$emit('showWizard', false)
    },
    methods: {
        startWizard() {
            this.$root.$emit('showWizard', true)
        },
        returnToWizard() {
            this.$root.$emit('returnToWizard')
        }
    }
}

export { CreatorMenu }
import { CreatorMenuTemplate } from "../../templates/character/creator-menu-template.js";

const CreatorMenu = {
    props: ['showWizard', 'currentStep', 'characterLoaded', 'isLoading'],
    template: CreatorMenuTemplate,
    mounted: function() {
        this.$root.$emit('showWizard', false)
    },
    data: function() {
        return {
            characterId: ""
        }
    },
    methods: {
        startWizard(choice) {
            this.$root.$emit('showWizard', choice)
        },
        stopWizard() {
            this.$root.$emit('stopWizard')
        },
        returnToWizard() {
            this.$root.$emit('returnToWizard')
        },
        sendIdToCharacter() {
            this.$root.$emit('retrieveCharacter', this.characterId)
        }
    }
}

export { CreatorMenu }
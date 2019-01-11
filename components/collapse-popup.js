import { CollapsePopupTemplate } from '../templates/collapse-popup-template.js'

const CollapsePopup = {
    props: ['selectedQuery'],
    template: CollapsePopupTemplate,
    created: function() {
        this.$root.$on('open-popup', () => {
            const quickView = document.getElementById("quickView")
            quickView.showModal()
        })
    },
    data: function () {
        return {
            showHistorical: true,
            showPredicted: false,
            showActual: false,
            opened: false
        }
    },
    methods: {
        determineCollapse(section) {
            // Taking the easy way out
            switch (section) {
                case "historical":
                    this.showHistorical = true
                    this.showPredicted = false
                    this.showActual = false
                    break
                case "predicted":
                    this.showHistorical = false
                    this.showPredicted = true
                    this.showActual = false
                    break
                case "actual":
                    this.showHistorical = false
                    this.showPredicted = false
                    this.showActual = true
            }
        },
        sendCloseToParent() {
            this.$root.$emit('close-popup')
            const quickView = document.getElementById("quickView")
            quickView.close()
            this.showHistorical = true
            this.showPredicted = false
            this.showActual = false
        }
    }
}

export { CollapsePopup }
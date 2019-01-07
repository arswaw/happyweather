import {
    BoxTemplate
} from '../../templates/details/box-template.js'

const Box = {
    props: ['query', 'index'],
    template: BoxTemplate,
    data: function () {
        return {
            cardStyles: ["bg-success", "bg-info", "bg-warning", "bg-danger", "bg-primary"],
            choices: ["", ""],
            choice1: "",
            choice2: "",
            showFirst: true,
            showSecond: true,
        }
    },
    methods: {
        determineComparisonDisplay(box) {
            if (box === "first") {
                this.showFirst = false
                this.choices[0] = this.choice1
                this.choice1 = ""
            } else {
                this.showSecond = false
                this.choices[1] = this.choice2
                this.choice2 = ""
            }
            console.info("Determine Comparison", box, this.choice1, this.choice2, this.choices)
        },
        resetBox(box) {

            if (box === "first") {
                this.choices[0] = ""
                this.showFirst = true
                this.choice1 = ""
            } else {
                this.choices[1] = ""
                this.showSecond = true
                this.choice2 = ""
            }
            console.info("Resetting!", box, this.choices)
            
            
        }
    }
}

export {
    Box
}
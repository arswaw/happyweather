import { ProgressTemplate } from "../../templates/character/progress-template.js";

const Progress = {
    template: ProgressTemplate,
    data: function() {
        return {
            progressText: "10%"
        }
    }
}

export { Progress }
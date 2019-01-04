import { BoxTemplate } from '../../templates/details/box-template.js'

const Box = {
    props: ['query', 'index'],
    template: BoxTemplate,
    data: function() {
        return {
            cardStyles: ["bg-success","bg-info","bg-warning","bg-danger","bg-primary"]
        }
    }
}

export { Box }
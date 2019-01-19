import { NavbarTemplate } from '../templates/navbar-template.js'

const Navbar = {
    template: NavbarTemplate,
    data: function() {
        return {
            subnavOpen: false
        }
    },
    methods: {
        toggleSubnav() {
            this.subnavOpen = !this.subnavOpen
        }
    }
}

export { Navbar }
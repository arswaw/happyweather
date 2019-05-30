import { NavbarTemplate } from '../templates/navbar-template.js'

const Navbar = {
    template: NavbarTemplate,
    data: function() {
        return {
            subnavOpen: false,
            slidingNavOpen: false
        }
    },
    methods: {
        toggleSubnav() {
            this.subnavOpen = !this.subnavOpen
        },
        toggleSlidingNav() {
            this.slidingNavOpen = !this.slidingNavOpen
        }
    }
}

export default Navbar
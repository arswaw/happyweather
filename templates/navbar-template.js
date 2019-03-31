const NavbarTemplate = /*html*/ `
<nav><!-- Template must contain a route node -->
<nav class="nav-main" id="nav-main">
  <a class="animated nav-title noselect" href="#">Happy Weather!</a>
  <a class="white-nav-text noselect" href="#/">Home</a>
  <a class="white-nav-text noselect" style="cursor:pointer" @click="toggleSubnav">More</a>
</nav>
<transition appear
        name="subnav-transition"
        enter-active-class="animated lightSpeedIn"
        leave-active-class="animated lightSpeedOut"
    >
<nav v-if="subnavOpen" id="subnav" class="subnav">
    <a class="sub-nav-text" @click="toggleSubnav" href="#/details/select">Details</a>
    <a class="sub-nav-text" @click="toggleSubnav" href="https://github.com/arswaw/happyweather" target="_blank">Github</a>
    <a class="sub-nav-text" @click="toggleSubnav" href="#/character/creatormenu">D&D</a>
</nav>
</transition>
</nav>
`

export {
  NavbarTemplate
}
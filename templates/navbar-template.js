const NavbarTemplate = /*html*/ `
<nav><!-- Template must contain a route node -->
<nav class="nav-main" id="nav-main">
  <a class="nav-title" href="#">Happy Weather!</a>
  <a class="white-nav-text noselect" href="#/">Home</a>
  <a class="white-nav-text noselect" style="cursor:pointer" @click="toggleSubnav">More</a>
</nav>
<transition appear
        name="subnav-transition"
        enter-active-class="animated lightSpeedIn"
        leave-active-class="animated lightSpeedOut"
    >
<nav v-if="subnavOpen" class="subnav">
    <a class="sub-nav-text" @click="toggleSubnav" href="#/details/select">Details</a>
    <a class="sub-nav-text" @click="toggleSubnav" href="https://github.com/arswaw/happyweather" target="_blank">Github</a>
    <a class="sub-nav-text" @click="toggleSubnav" href="http://www.brettrics.com/post/intro-to-time-series-forcasting-using-r/" target="_blank">Blog</a>
</nav>
</transition>
</nav>
`

export {
  NavbarTemplate
}
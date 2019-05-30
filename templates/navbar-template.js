const NavbarTemplate = /*html*/ `
<nav><!-- Template must contain a route node -->
<nav class="nav-main" id="nav-main">
  <a class="animated nav-title noselect" href="#">Happy Weather!</a>
  <a class="white-nav-text noselect" href="#/">Home</a>
  <a class="white-nav-text noselect" style="cursor:pointer" @click="toggleSlidingNav">More</a>
</nav>

<transition appear
        name="sliding-nav-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
    >
<nav v-if="slidingNavOpen" id="sliding-nav" class="sliding-nav">
  <ul>
    <li><a class="sliding-nav-text" @click="toggleSlidingNav" href="#/details/select">Details</a></li>
    <li><a class="sliding-nav-text" @click="toggleSubnav" href="#/social/profile">Social</a></li>
    <li><a class="sliding-nav-text" @click="toggleSubnav" href="#/character/creatormenu">D&D</a></li>
    <li><a class="sliding-nav-text" @click="toggleSubnav" href="https://github.com/arswaw/happyweather" target="_blank">Github</a></li>
    <li><a class="sliding-nav-text" @click="toggleSubnav" href="https://github.com/arswaw/weatherfun" target="_blank">Backend</a></li>
  </ul>
</nav>
</transition>

</nav>
`

export {
  NavbarTemplate
}
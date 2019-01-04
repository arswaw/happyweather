const NavbarTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Happy Weather</a>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/details/select" class="nav-link">Details</router-link>
            </li>
          </ul>
        </div>
      </nav>
`

export { NavbarTemplate }
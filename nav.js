const navbar = `
  <nav class="navbar navbar-expand-md sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <h1>Eloise Salmon</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="index.html">
            Home
          </a>
          <a class="nav-link" href="about-me/index.html">
            About me
          </a>
          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="projects/index.html"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul class="dropdown-menu border border-0" id="navDropdown">
              <li>
                <a class="dropdown-item" href="projects/index.html">
                  All projects
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="projects/bananas/index.html">
                  Bananas
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="projects/number-guessing-game/index.html"
                >
                  Number guessing game
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
`;
document.body.insertAdjacentHTML("afterbegin", navbar);

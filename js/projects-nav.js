const navbar = `
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.eloise.es">
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
          <a class="nav-link" href="https://www.eloise.es">
            Home
          </a>
          <a class="nav-link" href="https://www.eloise.es/about-me">
            About me
          </a>
          <div class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle active"
              href="https://www.eloise.es/projects"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul class="dropdown-menu border border-0" id="navDropdown">
              <li>
                <a class="dropdown-item" href="https://www.eloise.es/projects">
                  All projects
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://www.eloise.es/projects/bananas/index.html">
                  Bananas
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.eloise.es/projects/number-guessing-game"
                >
                  Number guessing game
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.eloise.es/projects/to-do-list"
                >
                  To do list
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.eloise.es/projects/random-color-generator"
                >
                  Random colour generator
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.eloise.es/projects/pokemon"
                >
                  Pokemon collection
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.eloise.es/projects/score-keeper"
                >
                  Ping Pong score keeper
                </a>
              </li>
              <li>
              <a
                class="dropdown-item"
                href="https://www.eloise.es/projects/fox-generator"
              >
                Random Fox Generator
              </a>
              </li>
              <li>
               <a
                 class="dropdown-item"
                 href="https://www.eloise.es/projects/tv-search-app"
               >
                 TV Show Search
                </a>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

`;
const footerContents = `
      <!-- Grid container -->
      <div class="container p-3 pb-0">
        <!-- Section: Social media -->
        <section class="mb-3">
          <!-- Linkedin -->
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #0082ca"
            href="https://www.linkedin.com/in/eloisesalmon/"
            target="_blank"
            role="button"
            ><i class="bi bi-linkedin"></i
          ></a>
          <!-- Github -->
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #333333"
            href="https://github.com/Eloise-es"
            target="_blank"
            role="button"
            ><i class="bi bi-github"></i
          ></a>
          <!-- Twitter -->
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: #55acee"
            href="https://twitter.com/Eloise__ES"
            target="_blank"
            role="button"
            ><i class="bi bi-twitter"></i
          ></a>

          <!-- Unsplash -->
          <a
            class="btn text-white btn-floating m-1"
            style="background-color: gray"
            href="https://unsplash.com/@eloise_es"
            target="_blank"
            role="button"
            ><i class="bi bi-camera-fill"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        This website was coded by
        <a class="text-white" href="https://www.eloise.es/about-me">Eloise Salmon</a>
      </div>
      <!-- Copyright -->`;
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");

// Add classes to nav then insert navbar contents
nav.classList.add("navbar", "navbar-expand-md", "sticky-top");
nav.insertAdjacentHTML("afterbegin", navbar);
// Add classes to footer then insert footer contents
footer.classList.add("bg-light", "text-center", "text-white", "mt-auto");
footer.insertAdjacentHTML("afterbegin", footerContents);
// body classes required to let everything work properly (e.g. footer stick to bottom)
document.body.classList.add("d-flex", "flex-column", "min-vh-100");

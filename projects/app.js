// Add new ones to the end so they appear in reverse date order
const projects = [
  {
    name: "Banana Quiz",
    description: "Information page and interactive quiz about bananas.",
    href: "bananas/index.html",
    date: "18th April 2022",
    topics: ["HTML", "CSS", "Basic JavaScript"],
    source: `<a href="https://www.shecodes.io/graduates/39228-eloise-salmon"
                target="_blank"
                >SheCodes Basics course</a>`,
    img: "../images/Bananas-screenshot.png",
    imgAltTxt: "Banana quiz screenshot",
  },
  {
    name: "Number Guessing Game",
    description:
      "Basic guessing game created to practise If Statements and While Loops in JavaScript.",
    href: "number-guessing-game/index.html",
    date: "3rd October 2022",
    topics: ["Basic JavaScript", "While Loops", "If Statements"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/number-guessing-game.png",
    imgAltTxt: "Guessing game screenshot",
  },
  {
    name: "To Do List (v1)",
    description: "Very very basic To Do List.",
    href: "to-do-list/index.html",
    date: "11th October 2022",
    topics: ["Basic JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/to-do-screenshot.png",
    imgAltTxt: "To Do List screenshot",
  },
  {
    name: "Pokemon Collection",
    description:
      "Pictures of all the original Pokemon, added to the page using JavaScript.",
    href: "pokemon/index.html",
    date: "26th October 2022",
    topics: ["Bootstrap", "Basic JavaScript", "Loops"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/pokemon-screenshot.png",
    imgAltTxt: "Pikemon screenshot",
  },
  {
    name: "Random Colour Generator",
    description:
      "Just click and it changes the page to a random colour. That's it!!",
    href: "random-color-generator/index.html",
    date: "26th October 2022",
    topics: ["Basic JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/colors-screenshot.png",
    imgAltTxt: "Color generator screenshot",
  },
  {
    name: "Ping Pong Score Keeper",
    description:
      "Web app to keep track of points during ping pong. Can be customised with names and target scores.",
    href: "score-keeper/index.html",
    date: "14th November 2022",
    topics: ["JavaScript", "Bootstrap"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/ping-pong-screenshot.png",
    imgAltTxt: "Ping Pong Score Keeper screenshot",
  },
  {
    name: "Random Fox Generator",
    description: "Click to generate a fact file about a random fox!",
    href: "fox-generator/index.html",
    date: "17th November 2022",
    topics: ["Bootstrap", "JavaScript", "APIs"],
    source: `My own idea, using free APIs found online`,
    img: "../images/fox-generator-screenshot.png",
    imgAltTxt: "Fox Generator screenshot",
  },
  {
    name: "TV Show Search",
    description: "Search for TV shows and see useful information about them.",
    href: "tv-search-app/index.html",
    date: "1st December 2022, updated 6th December 2022",
    topics: ["Bootstrap", "JavaScript", "APIs"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/tv-search-screenshot.png",
    imgAltTxt: "Fox Generator screenshot",
  },
];
// Select container that cards go into
const container = document.querySelector("#projectsContainer");

// Iterate over projects in array, adding cards with details
for (project of projects) {
  const cardContents = `<div class="col my-2">
            <div class="card h-100 text-bg-light">
            <a href="${project.href}"
                ><img
                  src="${project.img}"
                  class="card-img"
                  alt="${project.imgAltTxt}"
              /></a>
              <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">
                  ${project.description}
                </p>
                <p class="card-text">
                  <small>${project.date}</small>
                  <br />
                  <small>
                    ${project.source}</small
                  >
                </p>
              </div>
            </div>
            </div>`;
  container.insertAdjacentHTML("afterbegin", cardContents);
}

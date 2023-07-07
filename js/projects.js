// Add new ones to the end so they appear in reverse date order
const projects = [
  {
    name: "Banana Quiz",
    description: "Information page and interactive quiz about bananas.",
    href: "bananas/index.html",
    date: "18th April 2022",
    topics: ["HTML", "CSS", "JavaScript"],
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
    topics: ["JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
    img: "../images/number-guessing-game.png",
    imgAltTxt: "Guessing game screenshot",
  },
  {
    name: "To Do List (v1)",
    description: "Very very basic To Do List.",
    href: "to-do-list/index.html",
    date: "11th October 2022",
    topics: ["JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
    img: "../images/to-do-screenshot.png",
    imgAltTxt: "To Do List screenshot",
  },
  {
    name: "Pokemon Collection",
    description:
      "Pictures of all the original Pokemon, added to the page using JavaScript.",
    href: "pokemon/index.html",
    date: "26th October 2022",
    topics: ["Bootstrap", "JavaScript", "CSS"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
    img: "../images/pokemon-screenshot.png",
    imgAltTxt: "Pikemon screenshot",
  },
  {
    name: "Random Colour Generator",
    description:
      "Just click and it changes the page to a random colour. That's it!!",
    href: "random-color-generator/index.html",
    date: "26th October 2022",
    topics: ["JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
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
                >Web Developer Bootcamp</a>`,
    img: "../images/ping-pong-screenshot.png",
    imgAltTxt: "Ping Pong Score Keeper screenshot",
  },
  {
    name: "Random Fox Generator",
    description: "Click to generate a fact file about a random fox!",
    href: "fox-generator/index.html",
    date: "17th November 2022",
    topics: ["Bootstrap", "JavaScript", "APIs"],
    source: `My own idea, using free APIs`,
    img: "../images/fox-generator-screenshot.png",
    imgAltTxt: "Fox Generator screenshot",
  },
  {
    name: "TV Show Search",
    description: "Search for TV shows and see useful information about them.",
    href: "tv-search-app/index.html",
    date: "1st-6th December 2022",
    topics: ["Bootstrap", "JavaScript", "APIs"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
    img: "../images/tv-search-screenshot.png",
    imgAltTxt: "TV show screenshot",
  },
  {
    name: "Yelp Camp",
    description:
      "The final project for my course, this full-stack application was built using Node and MongoDB.",
    href: "https://yelp-camp-eloise.onrender.com",
    date: "January - March 2023",
    topics: ["Bootstrap", "JavaScript", "Node.js", "Express", "MongoDB"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Web Developer Bootcamp</a>`,
    img: "../images/yelp-camp.jpg",
    imgAltTxt: "Yelp Camp screenshot",
  },
  {
    name: "Animal Generator",
    description:
      "My first React app, built to learn about useState and events in React.",
    href: "https://react-animals-eloise.onrender.com",
    date: "7th July 2023",
    topics: ["React", "JavaScript", "JSX"],
    source: `<a href="https://www.udemy.com/course/react-redux"
                target="_blank"
                >Modern React with Redux</a>`,
    img: "../images/react-animals.jpg",
    imgAltTxt: "Animal generator screenshot",
  },
];
// Select container that cards go into
const container = document.querySelector("#projectsContainer");

// Iterate over projects in array, adding cards with details
for (let project of projects) {
  let topics = "";
  if (project.topics) {
    for (let topic of project.topics) {
      topics += `<span class="badge text-bg-secondary m-1">${topic}</span>`;
    }
  }
  const cardContents = `<div class="col my-2">
            <div class="card h-100">
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
                <div id="card-badges">${topics}</div>
              </div>
              <ul class="list-group list-group-flush">
               <li class="list-group-item">${project.source}</li>
              </ul>
              <div class="card-footer text-muted">${project.date}</div>
            </div>
            </div>`;
  container.insertAdjacentHTML("afterbegin", cardContents);
}

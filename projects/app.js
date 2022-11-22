const projects = [
  {
    name: "Banana Quiz",
    description: "Information page and interactive quiz about bananas",
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
    name: "To Do List (v1)",
    description: "Very very basic To Do List",
    href: "to-do-list/index.html",
    date: "11th October 2022",
    topics: ["Basic JavaScript"],
    source: `<a href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                >Colt Steele's Web Developer Bootcamp</a>`,
    img: "../images/to-do-screenshot.png",
    imgAltTxt: "To Do List screenshot",
  },
];

const container = document.querySelector("#projectsContainer");

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

// Declare variables from HTML
const generateBtn = document.querySelector("#generate-fox-btn");
const img = document.querySelector("img");
const mainDisplay = document.querySelector("#fox-name");
const nameDisplay = document.querySelector("#name");
const ageDisplay = document.querySelector("#age");
const characterDisplay = document.querySelector("#character");
const placeDisplay = document.querySelector("#place");
const bookDisplay = document.querySelector("#book");
const jokeDisplay = document.querySelector("#joke");

// Declare variables
let firstName = "";
let lastName = "";
let country = "";
let foxImg = "https://randomfox.ca/images/1.jpg";
let age = 0;
let starWarsCharacter = "";

// Add event listener to button
generateBtn.addEventListener("click", function () {
  generateFox();
});

// Executed on click of button - generates new fox
function generateFox() {
  console.log("generating fox....");
  resetFox();
  Promise.all([
    getRandomUser(),
    randomFoxPicture(),
    getAge(),
    getStarWarsPerson(Math.floor(Math.random() * 100)),
    getDadJoke(),
  ]).then(() => {
    printNewFox();
  });
  console.log("Fox complete!");
}

// Reset fox info so appended data is removed (only joke is appended, rest is changed)
function resetFox() {
  jokeDisplay.innerHTML = "";
}

// Get age (random number)
const getAge = () => {
  age = Math.floor(Math.random() * 10);
};

// Get random name from Random User API
const getRandomUser = async () => {
  try {
    const res = await axios.get(`https://randomuser.me/api/`);
    firstName = res.data.results[0].name.first;
    lastName = res.data.results[0].name.last;
    country = res.data.results[0].location.country;
  } catch (e) {
    console.log("ERROR", e);
    characterDisplay.innerHTML = "No name";
  }
};

// Get star wars character from SWAPI
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    starWarsCharacter = res.data.name;
  } catch (e) {
    console.log("ERROR", e);
    starWarsCharacter = "not a fan";
  }
};

// Get random fox from Random Fox API https://apilist.fun/api/randomfox
const randomFoxPicture = async () => {
  try {
    const res = await axios.get("https://randomfox.ca/floof/?ref=apilist.fun");
    foxImg = res.data.image;
  } catch (e) {
    return "error", e;
  }
};

// Get random English joke
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const newJoke = res.data.joke;
    const ul = jokeDisplay.appendChild(document.createElement("ul"));
    const li = ul.appendChild(document.createElement("li"));
    li.innerHTML = newJoke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

// Get random Spanish joke from Palabras Aleatorias
const randomJokeSpanish = async () => {
  try {
    const res = await axios.get(
      "https://palabras-aleatorias-public-api.herokuapp.com/joke/random"
    );
    const newJoke = res.data.body.lines;
    console.log(newJoke);
    const ul = jokeDisplay.appendChild(document.createElement("ul"));
    newJoke.forEach(function (item) {
      const jokeLine = ul.appendChild(document.createElement("li"));
      jokeLine.innerText = item;
    });
    return newJoke;
  } catch (e) {
    jokeDisplay.innerHTML = "None";
    return "error", e;
  }
};

// Function that prints all data at once when it's fulfilled
function printNewFox() {
  mainDisplay.innerHTML = `Hi, my name is ${firstName}!`;
  nameDisplay.innerHTML = `${firstName} ${lastName}`;
  placeDisplay.innerHTML = country;
  img.src = foxImg;
  if (age === 0) {
    age = "6 months";
  }
  ageDisplay.innerHTML = age;
  if (starWarsCharacter === "not a fan") {
    characterDisplay.innerHTML = "Not a Star Wars fan";
  } else {
    characterDisplay.innerHTML = `<a href = "https://starwars.fandom.com/wiki/${starWarsCharacter}" target = "_blank"> ${starWarsCharacter}</a>`;
  }
}

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

// Add event listener to button
generateBtn.addEventListener("click", function () {
  generateFox();
});

// Executed on click of button - generates new fox
function generateFox() {
  console.log("generating fox....");
  resetFox();
  randomFoxPicture();
  randomJokeSpanish();
  getRandomName();
  getStarWarsPerson(Math.floor(Math.random() * 100));
}

// Reset fox info so appended data is removed
function resetFox() {
  jokeDisplay.innerHTML = "";
}

// Get random name from Random User API
const getRandomName = async () => {
  try {
    const res = await axios.get(`https://randomuser.me/api/`);
    const firstName = res.data.results[0].name.first;
    const lastName = res.data.results[0].name.last;
    mainDisplay.innerHTML = `Hi, my name is ${firstName}!`;
    nameDisplay.innerHTML = `${firstName} ${lastName}`;
    const newCountry = res.data.results[0].location.country;
    placeDisplay.innerHTML = newCountry;
  } catch (e) {
    console.log("ERROR", e);
    characterDisplay.innerHTML = "No name";
  }
};

// Get star wars character from SWAPI
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    const newCharacter = res.data.name;
    characterDisplay.innerHTML = `<a href = "https://starwars.fandom.com/wiki/${newCharacter}" target = "_blank"> ${newCharacter}</a>`;
  } catch (e) {
    console.log("ERROR", e);
    characterDisplay.innerHTML = "Not a Star Wars fan";
  }
};

// Get random fox from Random Fox API https://apilist.fun/api/randomfox
const randomFoxPicture = async () => {
  try {
    const res = await axios.get("https://randomfox.ca/floof/?ref=apilist.fun");
    const newFox = res.data.image;
    img.src = newFox;
    return newFox;
  } catch (e) {
    return "error", e;
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

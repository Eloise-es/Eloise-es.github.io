// Declare variables from HTML
const generateBtn = document.querySelector("#generate-fox-btn");
const img = document.querySelector("img");
const nameDisplay = document.querySelector("#fox-name");
const characterDisplay = document.querySelector("#character");
const age = document.querySelector("#age");
const place = document.querySelector("#place");
const book = document.querySelector("#book");
const joke = document.querySelector("#joke");

// Add event listener to button
generateBtn.addEventListener("click", function () {
  generateFox();
});

// Executed on click of button - generates new fox
function generateFox() {
  console.log("generating fox....");
  randomFox();
  getStarWarsPerson(Math.floor(Math.random() * 100));
  getRandomName();
}

// Get random name from DRY
const getRandomName = async () => {
  try {
    const res = await fetch(
      "https://names.drycodes.com/10?nameOptions=girl_names"
    );
    const data = await res;
    console.log(data);
    // const newName = res.data;
    // console.log(newName);
    // nameDisplay.innerHTML = newName;
  } catch (e) {
    console.log("ERROR", e);
  }
};

// Get star wars character from SWAPI
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    const newCharacter = res.data.name;
    characterDisplay.innerHTML = newCharacter;
  } catch (e) {
    console.log("ERROR", e);
    characterDisplay.innerHTML = "Not a Star Wars fan";
  }
};

// Get random fox from Random Fox API https://apilist.fun/api/randomfox
const randomFox = async () => {
  try {
    const res = await axios.get("https://randomfox.ca/floof/?ref=apilist.fun");
    const newFox = res.data.image;
    img.src = newFox;
    return newFox;
  } catch (e) {
    return "error", e;
  }
};

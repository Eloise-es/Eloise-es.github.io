// Declare variables from HTML
const generateBtn = document.querySelector("#generate-fox-btn");
const img = document.querySelector("img");
const foxName = document.querySelector("#fox-name");
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
}

// Get star wars character from SWAPI
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    const newName = res.data.name;
    characterDisplay.innerHTML = newName;
    console.log(newName);
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

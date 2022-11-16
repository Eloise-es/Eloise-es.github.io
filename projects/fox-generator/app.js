// Declare variables from HTML
const generateBtn = document.querySelector("#generate-fox-btn");
const img = document.querySelector("img");

// Add event listener to button
generateBtn.addEventListener("click", function () {
  generateFox();
});

// Executed on click of button - generates new fox
function generateFox() {
  console.log("generating fox....");
  randomFox();
}

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

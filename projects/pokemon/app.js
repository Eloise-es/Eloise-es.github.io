// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#pokemon-container");

const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  // Create and append div + give class of 'pokemon'
  const newDiv = document.createElement("div");
  container.appendChild(newDiv);
  newDiv.classList.add("pokemon");

  // Create image
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;

  // Create span for under the image
  const newSpan = document.createElement("span");
  newSpan.innerText = i;

  // Append span and image
  newDiv.appendChild(newImg);
  newDiv.appendChild(newSpan);
}

// Define h1 and button
const h1 = document.querySelector("h1");
const btn = document.querySelector("#colorBtn");

// Create random numbers and convert to RGB code
function randomColor() {
  const newR = Math.floor(Math.random() * 255);
  const newG = Math.floor(Math.random() * 255);
  const newB = Math.floor(Math.random() * 255);
  if (newR <= 150 && newG <= 150 && newB <= 150) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  return `rgb(${newR}, ${newG}, ${newB})`;
}

// Make background change on button click
btn.addEventListener("click", function changeBodyColor() {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

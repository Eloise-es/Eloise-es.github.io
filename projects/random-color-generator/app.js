// Define h1 and button
const h1 = document.querySelector("h1");
const btn = document.querySelector("#colorBtn");

// Create random numbers and convert to RGB code
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if ((r + g + b) / 3 <= 100) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  return `rgb(${r}, ${g}, ${b})`;
}

// Make background change on button click
btn.addEventListener("click", function changeBodyColor() {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

// Define items on page
const targetScoreSelect = document.querySelector("#playing-to");
const resetBtn = document.querySelector("#reset");
const serveCountDisplay = document.querySelector("#serveCountDisplay");
const winnerIs = document.querySelector("#winnerIs");
const form = document.querySelector("form");
const formCollapse = document.querySelector("#formCollapse");

// Define player objects with starting scores of zero
const playerOne = {
  name: "Player One",
  button: document.querySelector("#player-1"),
  display: document.querySelector("#scoreP1"),
  score: 0,
};
const playerTwo = {
  name: "Player Two",
  button: document.querySelector("#player-2"),
  display: document.querySelector("#scoreP2"),
  score: 0,
};

// Define default target score and serve count (let so they can change)
let targetScore = 3;
let serveCount = 1;

//When the number being played to is changed (need to parse as it's a string)
targetScoreSelect.addEventListener("change", function (e) {
  targetScore = parseInt(this.value);
});

// Customise names using the form
form.addEventListener("submit", function (e) {
  // Stay on this page on submit
  e.preventDefault();

  // Change names to the input values from the form
  playerOne.name = form.elements.inputP1.value;
  playerTwo.name = form.elements.inputP2.value;

  // If nothing is entered, default back to "player one"/"player two"
  if (!playerOne.name) {
    playerOne.name = "Player One";
  }
  if (!playerTwo.name) {
    playerTwo.name = "Player Two";
  }

  // Update buttons with new names
  playerOne.button.innerText = `+1 ${playerOne.name}`;
  playerTwo.button.innerText = `+1 ${playerTwo.name}`;

  // Update serve tracker with new names (but retain counter)
  printServes();

  // Hide the form again using bootstrap
  new bootstrap.Collapse(formCollapse, {
    hide: true,
  });
});

// Listen for clicks on player buttons, feed in add point function
playerOne.button.addEventListener("click", function (e) {
  addPoint(playerOne);
});
playerTwo.button.addEventListener("click", function (e) {
  addPoint(playerTwo);
});

// On click of player button, add 1 point to total and update score in header, then check game points to update total and check for end of game
function addPoint(player) {
  player.score++;
  player.display.innerText = player.score;
  checkGamePoints();
  // Count after each point scored to see who should serve (2 serves per person)
  serveCount++;
  printServes();
}

// Function to check if game is over (called each time a point is won)
function checkGamePoints() {
  if (playerOne.score === targetScore || playerTwo.score === targetScore) {
    // Disable buttons and announce winner with confetti by catdad
    playerOne.button.disabled = true;
    playerTwo.button.disabled = true;
    announceWinner();
    confetti();
  }
}

// Applies classes depending on who is winner and loser, and adds in brackets who won
function announceWinner() {
  if (playerOne.score > playerTwo.score) {
    playerOne.display.classList.add("text-success");
    playerTwo.display.classList.add("text-danger");
    let content = document.createTextNode(`(${playerOne.name} wins!)`);
    winnerIs.appendChild(content);
  } else {
    playerOne.display.classList.add("text-danger");
    playerTwo.display.classList.add("text-success");
    let content = document.createTextNode(`(${playerTwo.name} wins!)`);
    winnerIs.appendChild(content);
  }
}

// This prints the current serve below the corresponding button in the correct colour
function printServes() {
  if (serveCount === 1) {
    serveCountDisplay.innerText = `Serve 1 for ${playerOne.name}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 2) {
    serveCountDisplay.innerText = `Serve 2 for ${playerOne.name}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 3) {
    serveCountDisplay.innerText = `Serve 1 for ${playerTwo.name}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
  } else if (serveCount === 4) {
    serveCountDisplay.innerText = `Serve 2 for ${playerTwo.name}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
    serveCount = 0;
  }
}

// On click of reset, execute reset function
resetBtn.addEventListener("click", reset);

// Reset the score to zero, enable buttons again, reset colours, reset serves
function reset() {
  for (let p of [playerOne, playerTwo]) {
    p.score = 0;
    p.display.innerText = p.score;
    p.display.classList.remove("text-danger", "text-success");
    p.button.disabled = false;
  }
  winnerIs.innerHTML = "";
  serveCount = 1;
  printServes();
}

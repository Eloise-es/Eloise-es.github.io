// Define items on page
const targetScoreSelect = document.querySelector("#playing-to");
const player1Btn = document.querySelector("#player-1");
const player2Btn = document.querySelector("#player-2");
const resetBtn = document.querySelector("#reset");
const winnerIs = document.querySelector("#winnerIs");
const P1Display = document.querySelector("#scoreP1");
const P2Display = document.querySelector("#scoreP2");
const serveCountDisplay = document.querySelector("#serveCountDisplay");
const customiseNamesButton = document.querySelector("#customiseNamesButton");
const form = document.querySelector("form");
const formCollapse = document.querySelector("#formCollapse");

// Customise names
let namePlayer1 = "Player One";
let namePlayer2 = "Player Two";

form.addEventListener("submit", function (e) {
  // Stay on this page on submit
  e.preventDefault();
  // Change names
  namePlayer1 = form.elements.inputP1.value;
  namePlayer2 = form.elements.inputP2.value;
  console.log(`player 1: ${namePlayer1}`);
  console.log(`player 2: ${namePlayer2}`);
  if (!namePlayer1) {
    namePlayer1 = "Player One";
  }
  if (!namePlayer2) {
    namePlayer2 = "Player Two";
  }
  player1Btn.innerText = `+1 ${namePlayer1}`;
  player2Btn.innerText = `+1 ${namePlayer2}`;
  // Hide the form again using bootstrap
  new bootstrap.Collapse(formCollapse, {
    hide: true,
  });
  // Update serve tracker with new names (but retain counter)
  printServes();
});

// Define starting scores (let so they can change)
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let targetScore = 3;
let serveCount = 1;

//When the number we're playing to is changed (need to parse as it's a string)
targetScoreSelect.addEventListener("change", function (e) {
  targetScore = parseInt(this.value);
});

// On click of reset, change h1 to '0 to 0' and reactivate buttons
resetBtn.addEventListener("click", reset);

// On click of player 1, add 1 point to total and update score in header, then check game points to update total and check for end of game
player1Btn.addEventListener("click", function (e) {
  scorePlayer1++;
  P1Display.innerText = scorePlayer1;
  checkGamePoints();
});

// On click of player 2, add 1 point to total and update score in header, then check game points to update total and check for end of game
player2Btn.addEventListener("click", function (e) {
  scorePlayer2++;
  P2Display.innerText = scorePlayer2;
  checkGamePoints();
});

// Function to check if game is over
function checkGamePoints() {
  if (scorePlayer1 === targetScore || scorePlayer2 === targetScore) {
    disableButtons();
    console.log("game over");
    applyColors();
    confetti();
  }
  // Count after each point scored to see who should serve (2 serves per person)
  serveCount++;
  printServes();
}

// To reset the score to zero, enable buttons again, reset colours by removing classes
function reset() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  P1Display.innerText = scorePlayer1;
  P2Display.innerText = scorePlayer2;
  enableButtons();
  resetColors();
  serveCount = 1;
  serveCountDisplay.className = "";
  serveCountDisplay.classList.add("text-start", "text-primary");
  serveCountDisplay.innerText = `Serve 1 for ${namePlayer1}`;
}

// Enable and disable buttons
function disableButtons() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
}
function enableButtons() {
  player1Btn.disabled = false;
  player2Btn.disabled = false;
}

// Applies classes depending on who is winner and loser. These change colours to red and green
function applyColors() {
  if (scorePlayer1 > scorePlayer2) {
    P1Display.classList.add("text-success");
    P2Display.classList.add("text-danger");
    let content = document.createTextNode(`(${namePlayer1} wins!)`);
    winnerIs.appendChild(content);
  } else {
    P1Display.classList.add("text-danger");
    P2Display.classList.add("text-success");
    let content = document.createTextNode(`(${namePlayer2} wins!)`);
    winnerIs.appendChild(content);
  }
}

// Removes classes on scores to reset colours
function resetColors() {
  P1Display.classList.remove("text-success", "text-danger");
  P2Display.classList.remove("text-danger", "text-success");
  winnerIs.innerHTML = "";
}

function printServes() {
  if (serveCount === 1) {
    serveCountDisplay.innerText = `Serve 1 for ${namePlayer1}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 2) {
    serveCountDisplay.innerText = `Serve 2 for ${namePlayer1}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 3) {
    serveCountDisplay.innerText = `Serve 1 for ${namePlayer2}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
  } else if (serveCount === 4) {
    serveCountDisplay.innerText = `Serve 2 for ${namePlayer2}`;
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
    serveCount = 0;
  }
}

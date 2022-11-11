// Define items on page
const targetScoreSelect = document.querySelector("#playing-to");
const player1Btn = document.querySelector("#player-1");
const player2Btn = document.querySelector("#player-2");
const resetBtn = document.querySelector("#reset");
const score = document.querySelector("#score");
const P1Display = document.querySelector("#scoreP1");
const P2Display = document.querySelector("#scoreP2");
const serveCountDisplay = document.querySelector("#serveCountDisplay");

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
  }
  // Count after each point scored to see who should serve (2 serves per person)
  console.log("serve count", serveCount);
  serveCount++;
  if (serveCount === 1) {
    serveCountDisplay.innerText = "Serve 1 for Player One";
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 2) {
    serveCountDisplay.innerText = "Serve 2 for Player One";
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-start", "text-primary");
  } else if (serveCount === 3) {
    serveCountDisplay.innerText = "Serve 1 for Player Two";
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
  } else if (serveCount === 4) {
    serveCountDisplay.innerText = "Serve 2 for Player Two";
    serveCountDisplay.className = "";
    serveCountDisplay.classList.add("text-end", "text-danger");
    serveCount = 0;
  }
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
  serveCountDisplay.innerText = "Serve 1 for Player One";
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
  } else {
    P1Display.classList.add("text-danger");
    P2Display.classList.add("text-success");
  }
}

// Removes classes on scores to reset colours
function resetColors() {
  P1Display.classList.remove("text-success", "text-danger");
  P2Display.classList.remove("text-danger", "text-success");
}

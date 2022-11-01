// Define items on page
const select = document.querySelector("#playing-to");
const player1Btn = document.querySelector("#player-1");
const player2Btn = document.querySelector("#player-2");
const resetBtn = document.querySelector("#reset");
const score = document.querySelector("#score");
const P1 = document.querySelector("#scoreP1");
const P2 = document.querySelector("#scoreP2");

// Define starting scores (let so they can change)
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let targetScore = 3;

//When the number we're playing to is changed (need to parse as it's a string)
select.addEventListener("change", function (e) {
  targetScore = parseInt(select.value);
});

// On click of reset, change h1 to '0 to 0' and reactivate buttons
resetBtn.addEventListener("click", function (e) {
  reset();
});

// On click of player 1, add 1 point to total and update h2
player1Btn.addEventListener("click", function (e) {
  scorePlayer1++;
  console.log(scorePlayer1);
  P1.innerText = scorePlayer1;
  checkGamePoints();
});

// On click of player 2, add 1 point to total and update h2
player2Btn.addEventListener("click", function (e) {
  scorePlayer2++;
  console.log(scorePlayer2);
  P2.innerText = scorePlayer2;
  checkGamePoints();
});

// Function to check if game is over
function checkGamePoints() {
  if (scorePlayer1 === targetScore || scorePlayer2 === targetScore) {
    disableButtons();
    console.log("game over");
  }
}

// To reset the score to zero and enable buttons again
function reset() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  P1.innerText = scorePlayer1;
  P2.innerText = scorePlayer2;
  enableButtons();
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

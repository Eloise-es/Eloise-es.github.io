function startGame() {
  // Prompt for max number (if null (cancel button) then stop process)
  let maximum = prompt("Choose a maximum number for this game.");
  if (maximum === null) {
    return;
  }
  // Parse to make it a number (do this after because it needs to check for null)
  parseInt(maximum);
  console.log(maximum);

  // Check if it's a number, if not, prompt to enter new one
  while (!maximum) {
    maximum = parseInt(prompt(`That is not a number! Please enter a number.`));
  }
  // Create target number
  const targetNum = Math.floor(Math.random() * maximum) + 1;
  console.log(targetNum);

  //  Prompt first guess (don't parse, so that 'quit' can work)
  let guess = prompt(
    `Enter your first guess! It's a number between 1 and ${maximum}...`
  );
  let attempts = 1;

  // While guess is not correct...
  while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if (guess < targetNum) {
      guess = prompt("Nope, that's too low!");
    } else {
      guess = prompt("Nope, that's too high!");
    }
  }
  // If 'quit' is typed, quit game
  if (guess === "quit") {
    alert(`Oh no!! You quit after only ${attempts} guesses :(`);
  }
  // If correct - response depends on number of guesses it took
  else if (parseInt(guess) === targetNum) {
    if (attempts === 1) {
      alert(
        `Amazing, you got it in just one guess! The secret number was ${targetNum}.`
      );
    } else if (attempts <= maximum * 0.2) {
      alert(
        `Wow, you got it pretty fast! The secret number was ${targetNum}. It only took you ${attempts} attempts to guess it.`
      );
    } else
      alert(
        `Well done, you got it! The secret number was ${targetNum}. It took you ${attempts} attempts to guess it.`
      );
  }
}

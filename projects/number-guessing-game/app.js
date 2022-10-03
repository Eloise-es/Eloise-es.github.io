function startGame() {
  let maximum = parseInt(prompt("Choose a maximum number for this game."));
  console.log(maximum);

  while (!maximum) {
    maximum = parseInt(prompt(`That is not a number! Please enter a number.`));
  }

  const targetNum = Math.floor(Math.random() * maximum) + 1;
  console.log(targetNum);

  let guess = parseInt(
    prompt(`Enter your first guess! It's a number between 1 and ${maximum}...`)
  );
  let attempts = 1;

  while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if (guess < targetNum) {
      guess = prompt("Nope, that's too low!");
    } else {
      guess = prompt("Nope, that's too high!");
    }
  }
  if (guess === "quit") {
    alert(`Oh no!! You quit after only ${attempts} guesses :(`);
  } else if (parseInt(guess) === targetNum) {
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

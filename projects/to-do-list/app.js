let input = prompt("What would you like to do?");

let list = ["eat", "sleep", "rave", "repeat"];

while (input !== "quit") {
  if (input === "add") {
    // Add new item - ask what it is then push onto array
    input = prompt("What is the new item?");
    list.push(input);
    console.log(`${input} added to list.`);
  } else if (input === "list") {
    // view list, using for loop and stopping by resetting input to null so it doesn't cycle through again
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}. ${list[i]}`);
      input = null;
    }
  } else if (input === "delete") {
    // ask which item, then delete it from array:
    input = parseInt(
      prompt("Which item would you like to delete? Type the number.")
    );
    // Check if it's a number:
    while (isNaN(input)) {
      input = prompt(
        "That's not a number! Please type the number of the item you want to delete."
      );
    }
    console.log(`${list[input]} sucessfully deleted.`);
    list.splice(input, 1);
    input = null;
  } else {
    // If it's not a command, ask again
    input = prompt("What would you like to do?");
  }
}
console.log("You quit the app.");

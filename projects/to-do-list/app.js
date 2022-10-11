let input = prompt("What would you like to do?");

const list = ["eat", "sleep", "rave", "repeat"];

while (input !== "quit" && input !== "q") {
  if (input === "add") {
    // Add new item - ask what it is then push onto array
    const newItem = prompt("What is the new item?");
    list.push(newItem);
    console.log(`${newItem} added to list.`);
    input = null;
  } else if (input === "list") {
    // view list, using for loop and stopping by resetting input to null so it doesn't cycle through again
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}. ${list[i]}`);
      input = null;
    }
  } else if (input === "delete") {
    // ask which item, then delete it from array:
    console.log("Here's a reminder of what you currently have on your list:");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}. ${list[i]}`);
    }
    input = parseInt(
      prompt(
        "Which item would you like to delete? Type the number (see list in the console)."
      )
    );
    // Check if it's a number:
    while (Number.isNaN(input)) {
      input = parseInt(
        prompt(
          "That's not a number! Please type the number of the item you want to delete."
        )
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

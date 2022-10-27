// Define HTML elements
const button = document.querySelector("button");
const myList = document.querySelector(".my-list");

// Define starting list
const list = ["eat", "sleep", "rave", "repeat"];

button.addEventListener("click", function () {
  let input = prompt("What would you like to do?");
  while (input !== "quit" && input !== "q") {
    if (input === "add" || input === "a") {
      // Add new item - ask what it is then push onto array
      const newItem = prompt("What is the new item?");
      list.push(newItem);
      alert(`${newItem} added to list.`);
      input = null;
    } else if (input === "list" || input === "l") {
      // view list, using for loop and stopping by resetting input to null so it doesn't cycle through again
      myList.innerHTML = "";
      for (let i = 0; i < list.length; i++) {
        myList.insertAdjacentHTML("beforeend", `<li>${i}. ${list[i]}</li>`);
        input = null;
      }
      break;
    } else if (input === "delete" || input === "d") {
      // ask which item, then delete it from array:
      alert("Here's a reminder of what you currently have on your list:");
      showCurrentList();
      input = prompt(
        "Which item would you like to delete? Type the number, or 'repeat' if you forgot. If you want to cancel, type 'q' or 'quit'"
      );

      // Check if it's a number:
      while (Number.isNaN(parseInt(input))) {
        if (input === "repeat") {
          showCurrentList();
          input = null;
        }
        // if it's 'q' or 'quit', print the list and
        else if (input === "q" || input === "quit") {
          myList.innerHTML = "";
          for (let i = 0; i < list.length; i++) {
            myList.insertAdjacentHTML("beforeend", `<li>${i}. ${list[i]}</li>`);
          }
          break;
        } else {
          input = parseInt(
            prompt("Please type the number of the item you want to delete.")
          );
          parseInt(input);
          list.splice(input, 1);
          alert(`${list[input]} sucessfully deleted.`);
          input = null;
        }
      }
    } else {
      // If it's not a command, ask again
      input = prompt("What would you like to do?");
    }
  }
});

function showCurrentList() {
  let currentList = "";
  for (let i = 0; i < list.length; i++) {
    currentList = `${currentList} ${i}. ${list[i]}`;
  }
  alert(currentList);
}

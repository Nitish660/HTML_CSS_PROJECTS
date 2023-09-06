const inputBox = document.querySelector(".input"); // Use ".input" to select the input element
const outputList = document.querySelector(".list-coinatiner"); // Use ".list-coinatiner" to select the list

function addTask() {
  // Corrected the function name to "addTask"
  if (inputBox.value === "") {
    alert("Add something first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    outputList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    {
      inputBox.value = "";
    }
  }
}



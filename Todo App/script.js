const inputBox = document.querySelector(".input");
const outputList = document.querySelector(".list-coinatiner");

function addTask() {
  if (inputBox.value === "") {
    alert("Add something first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    outputList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
  }
}

outputList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", outputList.innerHTML); // Use quotes around "data"
}

function showList() {
  outputList.innerHTML = localStorage.getItem("data"); // Use quotes around "data"
}

showList();

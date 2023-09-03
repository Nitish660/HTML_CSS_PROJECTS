var stat = document.querySelector("h3");

if (stat) {
    var addFriend = document.querySelector("#add");

    if (addFriend) {
        addFriend.addEventListener("click", function () {
            stat.innerHTML = "Friends";
            stat.style.color = "blue";
        });
    } else {
        console.error("#add button not found.");
    }
} else {
    console.error("h3 element not found.");
}

var remove = document.querySelector("#remove");

remove.addEventListener("click", function () {
    if (stat.innerHTML === "Friends") { // Compare the text content of stat
        stat.innerHTML = "Strangers";
        stat.style.color = "red"; // You can change the color back to the original color if needed
    }
});

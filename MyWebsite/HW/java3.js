// elements
const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

// save rolls number history
let historyList = [];

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  diceEl.innerHTML = getDiceFace(randomNum);
  historyList.push(randomNum);
  showHistory();
}

function showHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = "Roll " + (i+1) + ": " + getDiceFace(historyList[i]);
    rollHistoryEl.appendChild(li);
  }
}

// return dice logo
function getDiceFace(num) {
  if (num === 1) return "&#9856;";
  if (num === 2) return "&#9857;";
  if (num === 3) return "&#9858;";
  if (num === 4) return "&#9859;";
  if (num === 5) return "&#9860;";
  return "&#9861;";
}

// button + animation + roll
buttonEl.addEventListener("click", function () {
  diceEl.classList.add("roll-animation");
  setTimeout(function () {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});

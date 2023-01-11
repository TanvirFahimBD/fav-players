// select dom element
const players = document.getElementsByClassName("player-btn");
const selectedPlayers = document.getElementById("selected-players");
const selectedTotalPlayer = document.getElementById("selected-total-player");
const perPlayerExpense = document.getElementById("per-player-price");
const playerExpenseBtn = document.getElementById("player-expense-btn");
const playerExpense = document.getElementById("players-expense");
const managerExpense = document.getElementById("manager-expense");
const coachExpense = document.getElementById("coach-expense");
const totalExpenseBtn = document.getElementById("total-expense-btn");
const totalExpense = document.getElementById("total-expense");

// player select function
for (const player of players) {
  console.log(selectedPlayers.children.length);
  player.addEventListener("click", function () {
    // disable clicked button
    player.setAttribute("disabled", true);
    // get selected player name
    const selectedPlayer =
      player.parentNode.getElementsByClassName("card-title")[0].innerText;
    if (selectedPlayers.children.length < 5) {
      // add new selected player to list
      const li = document.createElement("li");
      li.innerText = selectedPlayer;
      selectedPlayers.appendChild(li);
      // show total selected player in list
      selectedTotalPlayer.innerText = selectedPlayers.children.length;
    } else {
      alert("Maximum 5 players already selected");
    }
  });
}

// player expense count
playerExpenseBtn.addEventListener("click", function (e) {
  // all players expense count
  playerExpense.innerText =
    perPlayerExpense.value * selectedPlayers.children.length;
  // clear per player expense amount
  perPlayerExpense.value = "";
});

function convertToFloat(value) {
  return parseFloat(value);
}

// total expense count
totalExpenseBtn.addEventListener("click", function () {
  totalExpense.innerText =
    convertToFloat(playerExpense.innerText) +
    convertToFloat(managerExpense.value) +
    convertToFloat(coachExpense.value);
  managerExpense.value = "";
  coachExpense.value = "";
});

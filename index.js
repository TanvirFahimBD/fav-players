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
  player.addEventListener("click", function () {
    // get selected player name
    const selectedPlayer =
      player.parentNode.getElementsByClassName("card-title")[0].innerText;
    // add new selected player to list
    const li = document.createElement("li");
    li.innerText = selectedPlayer;
    selectedPlayers.appendChild(li);
    // show total selected player in list
    selectedTotalPlayer.innerText = selectedPlayers.children.length;
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

// total expense count
totalExpenseBtn.addEventListener("click", function () {
  totalExpense.innerText =
    parseFloat(playerExpense.innerText) +
    parseFloat(managerExpense.value) +
    parseFloat(coachExpense.value);
  managerExpense.value = "";
  coachExpense.value = "";
});

// select dom element
const players = document.getElementsByClassName("player-btn");
const selectedPlayers = document.getElementById("selected-players");
const selectedTotalPlayer = document.getElementById("selected-total-player");
const perPlayerPrice = document.getElementById("per-player-price");
const playerExpenseBtn = document.getElementById("player-expense-btn");
const playerExpense = document.getElementById("players-expense");

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
  playerExpense.innerText =
    perPlayerPrice.value * selectedPlayers.children.length;
  perPlayerPrice.value = "";
});

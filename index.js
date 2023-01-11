// select dom element
const players = document.getElementsByClassName("player-btn");
const selectedPlayers = document.getElementById("selected-players");
const selectedTotalPlayer = document.getElementById("selected-total-player");

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

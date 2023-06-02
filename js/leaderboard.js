let pushToTable = (obj, table) => {
  let row = document.getElementById(table).insertRow(-1);
  row.insertCell(0).innerHTML = obj.gameScore;
  row.insertCell(1).innerHTML = obj.playerName;
  row.insertCell(2).innerHTML = obj.gameDate.slice(0, 10);
};

let tableMaker = (arr, tableID) => {
  arr.forEach((item) => pushToTable(item, tableID));
};

// speed game fetching from localStorage and displaying in leaderboard
let indexLocalStorage = window.localStorage;

if (indexLocalStorage.getItem("speedGame") !== null) {
  let speedGameScoreString = JSON.parse(indexLocalStorage.getItem("speedGame"));
  let speedGameScoreArray = speedGameScoreString.sort((a, b) => {
    return b.gameScore - a.gameScore;
  });
  tableMaker(speedGameScoreArray, "speedGameTable");
}

//cyclone game fetching from localStorage and displaying in leaderboard

if (indexLocalStorage.getItem("cycloneGame") !== null) {
  let cycloneGameScoreString = JSON.parse(
    indexLocalStorage.getItem("cycloneGame")
  );
  let cycloneGameScoreArray = cycloneGameScoreString.sort((a, b) => {
    return b.gameScore - a.gameScore;
  });
  tableMaker(cycloneGameScoreArray, "cycloneGameTable");
}

//Jackpot game fetching from localStorage and displaying in leaderboard

if (indexLocalStorage.getItem("jackpotGame") !== null) {
  let jackpotGameScoreString = JSON.parse(
    indexLocalStorage.getItem("jackpotGame")
  );
  let jackpotGameScoreArray = jackpotGameScoreString.sort((a, b) => {
    return b.gameScore - a.gameScore;
  });
  tableMaker(jackpotGameScoreArray, "jackpotGameTable");
}

// Bg Music
audioBg = new Audio("./music/leaderboard.mp3");

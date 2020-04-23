function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeImage(randomNum, playerNum) {
  var randomDiceImgFile;

  var playerImage;
  if (playerNum === 1) {
    playerImage = document.querySelector(".player-one-dice-img");
    randomDiceImgFile = "img/p1dice/dice" + randomNum + ".png";
  } else {
    playerImage = document.querySelector(".player-two-dice-img");
    randomDiceImgFile = "img/p2dice/dice" + randomNum + ".png";
  }

  playerImage.setAttribute("src", randomDiceImgFile);
}

function changeTitle(p1Num, p2Num) {
  var titleContent = document.querySelector(".winner-title");
  if (p1Num > p2Num) {
    titleContent.style.color = "#002b5f";
    titleContent.textContent = "Player One Wins!";
    document.querySelector(".player-two").style.opacity = 0.3;
  } else if (p1Num < p2Num) {
    titleContent.style.color = "#5ab3f8";
    titleContent.textContent = "Player Two Wins!";
    document.querySelector(".player-one").style.opacity = 0.3;
  } else {
    titleContent.style.color = "#000";
    titleContent.textContent = "Draw!";
  }
}

function resetOpacity() {
  document.querySelector(".player-one").style.opacity = 1;
  document.querySelector(".player-two").style.opacity = 1;
}

function playGame() {
  // increase number of games played
  count++;
  // if number of games played is greater than one, then...
    // change button text to "Reroll"
    // show game history button
  if (count > 0) {
    document.querySelector(".roll-button").textContent = "Reroll!";
    // document.querySelector(".game-history-button").style.display = "inline-flex";
  }

  // reset opacity of each player's dice
  resetOpacity();

  // initiate new dice rolls for each player
  var playerOneNum = diceRoll();
  var playerTwoNum = diceRoll();

  // change winner title
  changeTitle(playerOneNum, playerTwoNum);

  // change dice images
  changeImage(playerOneNum, 1);
  changeImage(playerTwoNum, 2);
}

// number of games played, count variable
var count = 0;

// prompt for player's names
var p1Name = prompt("What is player one's name?");
var p2Name = prompt("What is player two's name?");

// change player names to input
document.querySelector(".player-one-title").textContent = p1Name;
document.querySelector(".player-two-title").textContent = p2Name;

document.querySelector(".roll-button").addEventListener("click", playGame);

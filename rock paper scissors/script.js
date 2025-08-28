// global constants
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// define different choices
const choices = ["rock", "paper", "scissors"];

let computerChoice;
let playerChoice;

// eventlisteners on buttons
rockButton.addEventListener("click", () => {
  play(0);
});
paperButton.addEventListener("click", () => {
  play(1);
});
scissorButton.addEventListener("click", () => {
  play(2);
});

player1.addEventListener("animationend", () => {
  results();
  player1.classList.remove("shake");
});
player2.addEventListener("animationend", () => {
  player2.classList.remove("shake");
});

// makes sure all assets etc. is hidden.
function reset() {
  player1.className = "player";
  player2.className = "player";

  document.querySelector("#win").className = "hidden";
  document.querySelector("#lose").className = "hidden";
  document.querySelector("#draw").className = "hidden";
}

// calculates the hands of player and computer.
function play(choice) {
  reset();
  computerChoice = Math.floor(Math.random() * choices.length);
  playerChoice = choice;
  console.log("player hand is " + choices[playerChoice]);
  console.log("computers hand is", choices[computerChoice]);
  // calls shake function
  shake();
}

//start shake animation for both hands
function shake() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function results() {
  //adds the corresponding hand as choosen.
  player1.classList.add(choices[playerChoice]);
  player2.classList.add(choices[computerChoice]);

  // calculates the winner.
  if (playerChoice == computerChoice) {
    console.log("its a draw");
    document.querySelector("#draw").classList.toggle("hidden");
    // all instenses where player is the winner
  } else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)) {
    console.log("you win");
    document.querySelector("#win").classList.toggle("hidden");
  } else {
    console.log("you loose");
    document.querySelector("#lose").classList.toggle("hidden");
  }
}

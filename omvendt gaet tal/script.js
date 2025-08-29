let max = 100;
let min = 0;
let guess;
let numberOfGuesses = 0;
let guessedNumber;

function start() {
  console.log("start");
  numberOfGuesses = 0;
  makeGuess();
}

function makeGuess() {
  guessedNumber = Math.floor((min + max) / 2);
  console.log(guessedNumber);
  document.querySelector("#computerGuess").textContent = guessedNumber;
  numberOfGuesses++;
  console.log("antal gæt " + numberOfGuesses);
}

function higher() {
  min = guessedNumber;
  console.log("higher" + guessedNumber);
  makeGuess();
}
function lower() {
  max = guessedNumber;
  console.log("lower" + guessedNumber);
  makeGuess();
}

function correct() {
  console.log("computer guessed it!");
  document.querySelector("#computerGuess").textContent = "Jeg gættede det! det tog kun " + numberOfGuesses + " forsøg💪🏻 ";
}

function guessCounter() {}

function reset() {}

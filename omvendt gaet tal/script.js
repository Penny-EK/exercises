let max = 100;
let min = 0;
let guess;
let numberOfGuesses;
let guessedNumber;

function start() {
  console.log("start");
  guessNumber();
}

function makeGuess() {
  guessedNumber = Math.floor((min + max) / 2);
  console.log(guessedNumber);
  document.querySelector("#computerGuess").textContent = guessedNumber;
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
  document.querySelector("#computerGuess").textContent = "Jeg gættede det!";
}

function guessCounter() {}

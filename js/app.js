/*
Game Function
 - Input number between 1 and 10
 -Track the how many guess left
 - show the guess result with color
 -change the button state 
 - show the game fail option
*/

// Guess number
let min = 1, // set min number 1
  max = 10, //set last number 10
  winNum = random(min, max), // random number generate
  guessLeft = 3; //total 3 times users can change.

// UI Element
const game = document.querySelector(".game"),
  minNum = document.querySelector(".min"),
  maxNum = document.querySelector(".max"),
  btn = document.querySelector(".btn"),
  input = document.querySelector(".input"),
  message = document.querySelector(".message");

//set the min and max number dymanic 
minNum.textContent = min;
maxNum.textContent = max;

// add event to the button to play game

btn.addEventListener("click", guessGame);

// add event lister to the play button
game.addEventListener("mousedown", function (e) {
  if (e.target.classList == "btn play") {
    window.location.reload();
  }
});

//guessGame function
function guessGame(e) {

  //collect the input number
  let guessNum = parseInt(input.value); // parse the input number to Number format

  //check the number is write or wrong
  if (isNaN(guessNum) || guessNum < min || guessNum > max) {
    //show a message that your number is wrong
    setMessage(`Please Insert Number Between ${min} and ${max}`, "#cd1212");
  } else {
    // check the number is win number or not
    if (guessNum === winNum) {
      //show the win message and block the input
      setMessage(`Congreats! You Won the Game!. Number ${guessNum} is corrent`, "#8ddb6e");
    } else {
      //check how many guess left
      guessLeft = guessLeft - 1;
      //if guess is over 
      if (guessLeft === 0) {
        //message you lost
        setMessage(`You Lost :(, Correct ans is ${winNum}`, "#cd1212");
        input.disabled = true;
        // button to rest the game
        playAgain();
      } else {
        //show how many guess left
        setMessage(`Your Guess Number ${guessNum} is wrong, Your ${guessLeft} guess Left`, "#cd1212");
      }
    }
  }

  //prevent default behavior
  e.preventDefault();
}



//message function

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// play again function. 

function playAgain() {
  btn.value = "Play Again";
  btn.className = "btn play";
}

//random function for generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
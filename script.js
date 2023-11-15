let choiceArray = ["R", "P", "S"]; // Array values for system to choose from
//global variables to store values throughout the game
let win = 0,
  loose = 0,
  tie = 0;

function playTheGame() {
  let playerOption = window
    .prompt(
      "Enter R, P, or S to signify the choice of rock, paper, or scissors"
    )
    .toUpperCase();
  //get random value from 0-3 as we have array of 3 values only
  let randompick = Math.floor(Math.random() * 3);
  let systemOption = choiceArray[randompick];

  //Logic to compare the value and calculate win/loose/tie points  between player and system
  if (systemOption === "R") {
    if (playerOption === "R") {
      tie = tie + 1;
    } else if (playerOption === "P") {
      win = win + 1;
    } else if (playerOption === "S") {
      loose = loose + 1;
    }
  } else if (systemOption === "P") {
    if (playerOption === "R") {
      loose = loose + 1;
    } else if (playerOption === "P") {
      tie = tie + 1;
    } else if (playerOption === "S") {
      win = win + 1;
    }
  } else if (systemOption === "S") {
    if (playerOption === "R") {
      win = win + 1;
    } else if (playerOption === "P") {
      loose = loose + 1;
    } else if (playerOption === "S") {
      tie = tie + 1;
    }
  }
  continueGame();
}
function displayScore() {
  window.alert(
    "You won : " + win + " \n You Lost : " + loose + " \n Tie : " + tie
  );
}
function continueGame() {
  if (window.confirm("Do you want to continue?")) {
    playTheGame();
  } else {
    displayScore();
  }
}

playTheGame();

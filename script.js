//Asking the User Name and printing a welcome sentence on the console//
const userName = prompt('What is your name?');
let resultDisplay = document.getElementById('result')
document.getElementById('userGreeting').innerText = `Hello! ${userName}, nice to meet you, I hope your excited to play!. Please pick from either Rock, Paper, or Scissors below!.`;

//This part of my Java Script loads what my computer chooses in the game//
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === '1') {
    return "rock"
  } else if (randomNumber === '2'){
    return "paper"
  }
else {
  return "scissors"
}
};

//This part of my Java Script determines who wins between the user and the computer based on what the choices are//
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      resultDisplay.innerText = "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else {
      return "The computer won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === computerChoice) {
    return "It's a tie!";
  }
}

//This code plays the game (Rock, Paper, Scissors) between the user and the computer//
const playGame = (userChoice) => {
  console.log(userChoice);
  // alert("You threw " + userChoice);
  //This is where my userChoice should log to the screen as the image of rock, paper, or scissors//
  const myChoice = document.getElementById("userChoice");
  if (userChoice === 'rock'){
    myChoice.src = "imgs/Rock.png"
  } else if (userChoice === 'paper') {
    myChoice.src = "imgs/Paper.webp"
 } else {
    myChoice.src = "imgs/Scissors.png"
  }
  const computerChoice = getComputerChoice();

  if (computerChoice === 'rock'){
    computerChoice.src="imgs/Rock.png"
  } else if (computerChoice === 'paper') {
    computerChoice.src="imgs/Paper.webp"
  } else {
    computerChoice.src="imgs/Scissors.png"
  }


  alert("The computer picked " + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
};

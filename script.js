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
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
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
  alert("You picked " + userChoice);
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
  //This is where my computer choice should log to the screen with either the image of rock, paper, or scissors//
  console.log(computerChoice);
  const pickComputer = computerChoice
     if(computerChoice === 'rock') {
      pickComputer.src = "imgs/Rock.png"
     } else if (computerChoice === 'paper') {
      pickComputer.src = "imgs/Paper.webp"
     } else {
      pickComputer.src= "imgs/Scissors.png"
     }
  //This is where the code will tell the user and put on the screen what the computer choice was//
  alert("The computer picked " + computerChoice);
  //This is where the code will put on the screen who won with the computer vs. the user//
  alert(determineWinner(userChoice, computerChoice));
};

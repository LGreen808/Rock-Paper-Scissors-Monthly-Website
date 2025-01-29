//Asking the User Name and printing a welcome sentence on the console//
const userName = prompt('What is your name?'); 
document.getElementById('userGreeting').innerText = `Hello! ${userName}, nice to meet you, I hope your excited to play!. Please pick from either Rock, Paper, or Scissors below!.`;


const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "Rock" ||
      userInput === "Paper" ||
      userInput === "Scissors" ||
    ) {
    return ( )
    } else {
      console.log("Not a valid input!");
    }
  };
  const getComputerChoice = () => {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    } if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
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
  
  const playGame = () => {
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice);
    console.log("The computer picked " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  
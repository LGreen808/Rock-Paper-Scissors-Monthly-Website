const getUserName = prompt('What is your name?'); 




const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
      console.log(`User input : ${userInput}`);
    } else {
      console.log("Not a valid input!");
    }
  };
  
  const getComputerChoice = () => {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "You won!";
    } else if (userChoice === "rock") {
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
  };
  
  const playGame = () => {
    let userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice);
    console.log("The computer picked " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  
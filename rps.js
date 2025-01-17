function getComputerChoice() {
  let computerChoiceNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let computerChoice;
  if (computerChoiceNumber === 1) {
    computerChoice = "Rock";
  } else if (computerChoiceNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("What will you throw? Rock, paper, or scissors?");
  if (humanChoice.toLowerCase() === "rock") {
    humanChoice = "Rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    humanChoice = "Paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    humanChoice = "Scissors";
  } else {
    alert("Rock, paper, or scissors only please.");
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`---Round ${i + 1}---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You win! Nice job!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("You lose. Better luck next time!");
  }
}

playGame();

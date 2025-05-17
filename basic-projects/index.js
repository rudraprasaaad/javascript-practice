function rockPaperScissorsGame() {
  const userChoicePropmt = prompt("Enter rock paper and scissor");
  let userChoice = userChoicePropmt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("computer choice =====>", computerChoice);
  console.log("user choice======>", userChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You WIN, yay!!!");
  } else if (userChoice === computerChoice) {
    console.log("The game is tie");
  }
}

rockPaperScissorsGame();

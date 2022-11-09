//global 
const answers = ["rock", "paper", "scissors"]; 

//generate a random choice 

function getComputerChoice() {
  return computerChoice = answers[Math.floor(answers.length * Math.random())];
} 

function getPlayerChoice() {
  let playerChoice = window.prompt("Rock, Paper, or Scissors?");
  return playerChoice;
}


function singleRound() {
  let computerAnswer = getComputerChoice();  
  let playerAnswer = getPlayerChoice(); 
  let result; 
  console.log(playerAnswer); 
  console.log(computerAnswer);  

  if (computerAnswer === playerAnswer) {
    result = null; 
  } else if (computerAnswer === "rock" && playerAnswer === "scissors") {
    result = "Computer wins"; 
  } else if (playerAnswer === "rock" && computerAnswer === "scissors") {
    result = "Player wins"; 
  } else if (computerAnswer === "scissors" && playerAnswer === "paper") {
    result = "Computer wins"; 
  } else if (playerAnswer === "scissors" && computerAnswer === "paper") {
    result = "Player wins"; 
  } else if (computerAnswer === "paper" && playerAnswer === "rock") {
    result = "Computer wins"; 
  } else if (playerAnswer === "paper" && computerAnswer === "rock") {
    result = "Player wins"; 
  } 
  return result; 
}


function playFullGame() {
  count = 5; 
  computerCount = 0; 
  playerCount = 0; 

  for (let i = 0; i <= count; i++) {
    let result = singleRound(); 
    if (result === "Computer wins") {
      computerCount += 1; 
    } else if (result === "Player wins") {
      playerCount += 1; 
    } else {
      singleRound(); 
    }
  }
  return {"computerCount": computerCount, "playerCount": playerCount}; 
}

function whoWon() {
 const results = playFullGame();
 const computerCount = results.computerCount;
 const playerCount = results.playerCount;
  
  if (computerCount > playerCount) {
    return "Computer won!"; 
  } else {
    return "Player won!"
  }
}
console.log(whoWon()); 
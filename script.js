//global 
const choices = ["rock", "paper", "scissors"]; 
const answers = document.querySelectorAll('button'); 
let playerChoice; 
let computerChoice = getComputerChoice();

const initialCard = document.getElementById('initial-card'); 
const gameCard = document.getElementById('game-card'); 
const resultsCard = document.getElementById('results-card'); 

const resultsText = document.getElementById('resultsText'); 

const compRockImg = document.getElementById('computer-rock-choice'); 
const compPaperImg = document.getElementById('computer-paper-choice'); 
const compScissorsImg = document.getElementById('computer-scissors-choice'); 

const playerRockImg = document.getElementById('player-rock-choice');
const playerPaperImg = document.getElementById('player-paper-choice');
const playerScissorsImg = document.getElementById('player-scissors-choice'); 

const playerCounter = document.getElementById('playerCounter'); 
const computerCounter = document.getElementById('computerCounter'); 

let playerScore = 0;
let computerScore = 0;


answers.forEach(answer => answer.addEventListener('click', handlePlayerMove)); 


function handlePlayerMove(e) {
  playerChoice = e?.target.getAttribute('data-choice');
  initialCard.classList.add('hidden'); 
  gameCard.classList.remove('hidden'); 

  computerChoice = getComputerChoice(); 
  console.log(computerChoice);
  showComputerChoice();
  showPlayerChoice();
  const result = getWhoWonRound();
  updateScores(result); 

  setTimeout(() => {
    showResult(result);

    setTimeout(() => {
      resultsCard.classList.add('hidden');
      initialCard.classList.remove('hidden');
    }, 2000);
  }, 3000);
}

function getComputerChoice() {
  return choices[Math.floor(choices.length * Math.random())];
} 

function showComputerChoice() {
  if (computerChoice === 'rock') {
    compPaperImg.classList.add('hidden');
    compScissorsImg.classList.add('hidden');
    compRockImg.classList.remove('hidden'); 
  } else if (computerChoice === 'paper') {
    compRockImg.classList.add('hidden');
    compScissorsImg.classList.add('hidden');
    compPaperImg.classList.remove('hidden');
  } else if (computerChoice === 'scissors') {
    compRockImg.classList.add('hidden');
    compPaperImg.classList.add('hidden');
    compScissorsImg.classList.remove('hidden'); 
  }
}

function showPlayerChoice() {
  if (playerChoice === 'rock') {
    playerPaperImg.classList.add('hidden');
    playerScissorsImg.classList.add('hidden');
    playerRockImg.classList.remove('hidden');
  } else if (playerChoice === 'paper') {
    playerRockImg.classList.add('hidden');
    playerScissorsImg.classList.add('hidden');
    playerPaperImg.classList.remove('hidden'); 
  } else if (playerChoice === 'scissors') {
    playerRockImg.classList.add('hidden');
    playerPaperImg.classList.add('hidden');
    playerScissorsImg.classList.remove('hidden'); 
  }
}

//play a single round of the game
function getWhoWonRound() {
  let result;  

  if (computerChoice === playerChoice) {
    result = null; 
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "Computer wins"; 
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "Player wins"; 
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "Computer wins"; 
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "Player wins"; 
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    result = "Computer wins"; 
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "Player wins"; 
  } 
  return result; 
}

function showResult(result) {
  const winningScore = 5;

  gameCard.classList.add('hidden'); 
  resultsCard.classList.remove('hidden'); 

  if (playerScore === winningScore) {
    resultsText.innerHTML = 'Player has won the game!!';
    return;
  } else if (computerScore === winningScore) {
    resultsText.innerHTML = 'Computer has won the game!';
    return;
  }

  if (result === null) {
    resultsText.innerHTML = 'This round was a tie. Play again.';
  } else if (result === 'Player wins') {
    resultsText.innerHTML = 'The Player has won this round!';
  } else {
    resultsText.innerHTML = 'The Computer has won this round!'; 
  }
} 

function updateScores(result) {
  if (result === 'Player wins') {
    playerScore++;
    playerCounter.innerHTML = 'Player Score :' + playerScore;
  } else if (result === 'Computer wins') {
    computerScore++;
    computerCounter.innerHTML = 'Computer Score :' + computerScore;
  }
}

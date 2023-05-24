const result = document.querySelector('.result')
const score = document.querySelector('.score')
const buttons = document.querySelectorAll('.button');
let playerScore = 0;
let computerScore = 0;
const availableChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return availableChoices[Math.floor(Math.random() * availableChoices.length)] //Generates random choice for computer
} ;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie, both users chose ${playerSelection}`; //if both choices identical = tie
  }
  else if ( // Win conditions
    playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`
    }
    { // If none of the win conditions = you lose
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}`
    }}

function checkWinner() {
  if (playerScore > computerScore) {
    score.textContent = `You won the bo7!`
  }
  else {
    score.textContent = 'You lost the bo7!'
  }
  playerScore = 0;
  computerScore = 0;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = button.textContent;
    result.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `${playerScore} - ${computerScore}`
    if (playerScore === 5 || computerScore === 5) {
      checkWinner();
    }
  });
});


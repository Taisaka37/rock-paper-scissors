function game() {
const availableChoices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return availableChoices[Math.floor(Math.random() * availableChoices.length)] //Generates random choice for computer
} ;
let playerPrompt = prompt("Rock, paper or scissors? "); //Asks player for a choice
const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase(); //Capitalizes player's choice
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
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
    }

}

console.log(playRound(playerSelection, computerSelection));}
let playerScore = 0;
let computerScore = 0;
game();
game();
game();
game();
game();
console.log(`Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`) //testing new branch
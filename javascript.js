// Create a function that randomly return either 'Rock' / 'Paper' / 'Scissors
function getComputerChoice() {
    // Create a list of 'rock', 'paper', and 'scissors'
    const choices = ["rock", "paper", "scissors"];
    // Random and store the index with the length of the array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Return the result
    return computerChoice;
}

// Create a function that takes playerChoice and computerChoice as an input then return a string of result
function playRound(playerSelection, computerSelection) {
    // Compare the two selections
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors.";
    }
    return "You win!"
}

const playerSelection = prompt("Rock? Paper? or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
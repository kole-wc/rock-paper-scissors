// Create a function that randomly return either 'Rock' / 'Paper' / 'Scissors
function getComputerChoice() {
    // Create a list of 'rock', 'paper', and 'scissors'
    const choices = ["rock", "paper", "scissors"];
    // Random and store the index with the length of the array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Return the result
    return computerChoice;
}

// function getUserInput() {
//     // Ask for input
//     playerInput = prompt("Rock? Paper? or Scissors?").toLowerCase();
//     // If player input not the same as the choices ask for input again
//     if (!((playerInput == "rock") || (playerInput == "paper")|| (playerInput == "scissors"))) {
//         alert("Incorrect choice, please check the spelling.");
//         getUserInput();
//     }
//     // If the input is correct then return then just return the player input
//     return playerInput;
// }

// Create a function that takes playerChoice and computerChoice as an input then return a string of result
function playRound(e) {
    const playerSelection = e.target.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors.";
    }
    return "You win!";
}

const userChoice = document.querySelector('.user-choice');
const choices = userChoice.querySelectorAll('button');
choices.forEach(choice => choice.addEventListener('click', playRound));

// // Create a function that will play 5 rounds with incremented score and report the winner and loser
// function game() {
//     // Initialize the score variables
//     let playerScore = 0;
//     let computerScore = 0;
//     // Loop to count the score by incrementing if the condition is matched
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getUserInput();
//         console.log(playerSelection);
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection)
//         if (result === "You win!") {
//             playerScore += 1;
//         }
//         else if (result === "It's a tie.") {
//             // Do nothing
//         }
//         else {
//             computerScore += 1;
//         }
//         console.log(`${result} [${playerScore} - ${computerScore}]`);
//         alert(`${result} [${playerScore} - ${computerScore}]`);
//     }
//     // Compare the score to decide winner or a tie
//     if (playerScore > computerScore) {
//         return `You win! The score is ${playerScore} - ${computerScore}`;
//     }
//     else if (computerScore > playerScore) {
//         return `Computer wins! The score is ${playerScore} - ${computerScore}`;
//     }
//     else {
//         return `It's a tie! ${playerScore} - ${computerScore}`
//     }
// }

// alert(game());
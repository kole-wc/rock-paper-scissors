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
    // Create a variable to store player selection and ask for input
    // Change the input value to lowercase for case-insensitive
    playerChoice = prompt("Rock? Paper? or Scissors?").toLowerCase();
    console.log(playerChoice);
    // Create a varialbe to store computer selection that is returned from getComputerChoice function
    // Compare the two selections, if true return the result message
}

playRound();
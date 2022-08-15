// Create a function that randomly return either 'Rock' / 'Paper' / 'Scissors
function getComputerChoice() {
    // Create a list of 'rock', 'paper', and 'scissors'
    const choices = ["Rock", "Paper", "Scissors"];
    // Random and store the index with the length of the array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Return the result
    return computerChoice;
}

// Create a function that takes playerChoice and computerChoice as an input then return a string of result

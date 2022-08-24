// Global div nodes
const container = document.querySelector('.container');
const result = document.createElement('div');
const actionHistory = document.createElement('div');
const score = document.querySelector('.score')
const roundResult = document.createElement('h2');
const question = document.querySelector('.question');
const userCount = document.querySelector("#user");
const computerCount = document.querySelector("#com");
const action = document.createElement('div');

// Global misc nodes
const restartButton = document.createElement('button');

// Nodes styles
result.classList.add("result");
roundResult.classList.add("round-result");
action.classList.add("action");

const rock = '<svg id="rock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z"/></svg>';
const paper = '<svg id="paper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"/></svg>';
const scissors = '<svg id="scissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 192v111.1C512 383.4 447.4 448 368 448H288c-26.52 0-48-21.48-48-47.99c0-9.152 2.697-17.61 7.139-24.89C224.9 370.1 208 351.5 208 328c0-16.72 8.561-31.4 21.52-39.1H40c-22.09 0-40-17.9-40-39.99s17.91-39.1 40-39.1h229.5L60 142.2C42.93 136.8 31.99 121.1 31.99 104c0-3.973 .5967-8.014 1.851-12.01c5.35-17.07 21.08-28.04 38.06-28.04c4 0 8.071 .6085 12.09 1.889l279.2 87.22C364.8 153.6 366.4 153.8 368 153.8c6.812 0 13.12-4.375 15.27-11.23c.4978-1.588 .7346-3.195 .7346-4.777c0-6.807-4.388-13.12-11.23-15.25l-72.54-22.67l14.29-17.85C323.6 70.67 337.4 64.04 352 64.04h48c10.39 0 20.48 3.359 28.8 9.592l38.41 28.79c25.2 18.91 40.53 47.97 43.55 79.04C511.5 184.9 512 188.4 512 192z"/></svg>';

// Create a function that randomly return either 'Rock' / 'Paper' / 'Scissors
function getComputerChoice() {
    // Create a list of 'rock', 'paper', and 'scissors'
    const choices = ["rock", "paper", "scissors"];
    // Random and store the index with the length of the array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Return the result
    return computerChoice;
}

function annouceResult(playerScore, computerScore, result) {
    if (computerScore === 5) {
        result.textContent = "Sorry. You LOSE! :P";
    }
    else if (playerScore === 5){
        result.textContent = "Congratulations, VICTORY!";
    }
}

function displayResult(result){
    roundResult.innerHTML = result;

    const svgs = document = roundResult.querySelectorAll('svg')
    let svgStyle = "width: 20px; height: 20px; "
    svgs.forEach(svg => {
        svg.style.cssText = svgStyle;
    });
    
    score.appendChild(actionHistory);
    actionHistory.appendChild(roundResult);
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
    result.remove();
    restartButton.remove();
    actionHistory.remove();
    roundResult.remove();
    action.remove();
    computerCount.textContent = 0;
    userCount.textContent = 0;
    choices.forEach(choice => userChoice.appendChild(choice));
    container.insertBefore(question, userChoice);
}

function displayAction(userChoice, comChoice) {
    let svgUser = "";
    let svgCom = "";

    if (userChoice === "rock") {
        svgUser = rock;
    }
    else if (userChoice === "paper") {
        svgUser = paper;
    }
    else {
        svgUser = scissors;
    }
    

    if (comChoice === "rock") {
        svgCom = rock;
    }
    else if (comChoice === "paper") {
        svgCom = paper;
    }
    else {
        svgCom = scissors;
    }

    action.innerHTML = "<div>" + svgUser + "</div>" + "<div>" + svgCom + "</div>";
    score.appendChild(action);
}

let userScore = 0;
let computerScore = 0;

// Create a function that takes playerChoice and computerChoice as an input then return a string of result
function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    
    displayAction(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        displayResult(`It's a tie.`);
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        displayResult(`You lose! ${paper} beats ${rock}.`);
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        displayResult(`You lose! ${scissors} beats ${paper}.`);
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        displayResult(`You lose! ${rock} beats ${scissors}.`);
    }
    else {
        userScore += 1;
        displayResult(`You win!`);
    }
    
    computerCount.textContent = computerScore;
    userCount.textContent = userScore;

    if (computerScore === 5 || userScore === 5) {
        container.insertBefore(result, container.firstChild);
        annouceResult(userScore, computerScore, result);

        choices.forEach(choice => choice.remove());
        question.remove()
        restartButton.textContent = "Play again?";
        userChoice.appendChild(restartButton);

        restartButton.addEventListener('click', resetGame)
    }
}

const userChoice = document.querySelector('.user-choice');
const choices = userChoice.querySelectorAll('button');
choices.forEach(choice => choice.addEventListener('click', playRound));

//Computer returns a random option
function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let computerDecision = Math.floor(Math.random() * computerChoices.length);
    let computerTurn = computerChoices[computerDecision];
    return computerTurn;
}

//Plays a single round of rock, paper, scissors to determine a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper") {
        return ("You lost :(")
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "scissors") {
        return ("You won :)))")
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "scissors") {
        return ("You lost :(")
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "rock") {
        return ("You won :)))")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock") {
        return ("You lost :(")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "paper") {
        return ("You won :)))")
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return ("Tie Game!")
    } 
}

let playerChoice = 'scissors'
let hypocomputer = "paper"
console.log(playRound(playerChoice, hypocomputer))
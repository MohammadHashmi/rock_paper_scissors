//Create a function that makes a computer pick either rock, paper or scissors
function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"]
    //https://josephcardillo.medium.com/using-math-random-in-javascript-c49eff920b11 Used this to generate a random number
    //With this random number, it will access the array of computer choices and choose the one correlating to that number. That will be the computers choice
    let computerIndex = Math.round((Math.random() * 2))
    let computerDecision = computerChoices[computerIndex]
    return computerDecision
}

getComputerChoice()
 
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

console.log(playRound("rock", getComputerChoice()));

/*

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        (playRound(playerChoice, "scissors"));
    }
}

let playerChoice = "Rock"
let testPlayer = "rock"
console.log(game())*/
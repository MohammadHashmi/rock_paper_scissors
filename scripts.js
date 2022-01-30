//Computer returns a random option
function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let computerDecision = Math.floor(Math.random() * computerChoices.length);
    let computerTurn = computerChoices[computerDecision];
    return computerTurn;
}

computerPlay(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase === 'Rock')
}
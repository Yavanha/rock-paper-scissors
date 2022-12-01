const choices = ["rock", "paper", "scissors"]

function randowIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function getComputerChoice() {
    return choices[randowIntFromInterval(0, choices.length - 1)]
}

function getPlayerChoice() {
    let playerSelection = prompt("Please Make a choice by typing: Rock, Poper, Scissors (case insensitive)").toLocaleLowerCase()
    while(!choices.includes(playerSelection))
        playerSelection = prompt("Again, please make the right choice between: Rock, Poper, Scissors (case insensitive)").toLocaleLowerCase()
    return playerSelection;
 }



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Equality !"
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You Win ! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose ! ${computerSelection} beats ${playerSelection}`
    }
}





function game() {
    console.log("The game Rock, Paper and Scissors is Starting")
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log("computerSelection: " + computerSelection)

    for (let i = 0; i < 5; i++) {
        console.log('Round Number', i + 1)
        console.log(playRound(playerSelection, computerSelection));
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log('\n')
    }
}

game()
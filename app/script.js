const promptSync = require('prompt-sync');
prompt = promptSync();
const choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];
const playerWin = "You win that round!";
const compWin = "Computer wins that round!";
const tied = "That's a tie!";
function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case 0, 0: //rock v rock
            return tied;
        case 0, 1: //rock v paper
            return compWin// + " Paper covers Rock";
        case 0, 2: //rock v scissors
            return playerWin// + " Rock crushes Scissors";
        case 0, 3: //rock v lizard
            return playerWin //+ " Rock crushes Lizard";
        case 0, 4: //rock v spork
            return compWin //+ " Spork vaporizes Rock";
        case 1, 0: //paper v rock
            return playerWin// + " Paper covers Rock";
        case 1, 1: //paper v paper
            return tied;
        case 1, 2: //paper v scissors
            return compWin //+ " Scissors cuts Paper";
        case 1, 3: //paper v lizard
            return compWin //+ " Lizard eats Paper";
        case 1, 4: //paper v spork
            return playerWin// + " Paper disproves Spock";
        case 2, 0: //scissors v rock
            return compWin //+ " Rock crushes Rock";
        case 2, 1: //scissors v paper
            return playerWin //+ " Scissors cuts Paper";
        case 2, 2: //scissors v scissors
            return tied;
        case 2, 3: //scissors v lizard
            return playerWin //+ " Scissors decapitates Lizard";
        case 2, 4: //scissors v spork
            return compWin //+ " Spock smashes Scissors";
        case 3, 0: //lizard  v rock
            return compWin //+ " Rock crushes Lizard";
        case 3, 1: //lizard v paper
            return playerWin //+ " Lizard eats Paper";
        case 3, 2: //lizard v scissors
            return compWin// + " Scissors decapitates Lizard";
        case 3, 3: //lizard v lizard
            return tied;
        case 3, 4: //lizard v spork
            return playerWin //+ " Lizard poisons Spock";
        case 4, 0: //spork v rock
            return playerWin //+ "Spock vaporizes Rock";
        case 4, 1: //spork v paper
            return compWin //+ " Paper disproves Spock";
        case 4, 2: //spork v scissors
            return playerWin// + " Spock smashes Scissors";
        case 4, 3: //spork v lizard
            return compWin// + " Lizard poisons Spock";
        case 4, 4: //spork v spork
            return tied;
    }
}
computerPlay = () => {
    function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    }
    const myMax = choiceArray.length - 1;
    const myMin = 0;
    const idx = randomRange(myMin, myMax);
    const compChoice = choiceArray[idx];
    return compChoice;
}
game = () => {
    let compScore = 0;
    let playerScore = 0;
    let tiedScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Kindly make a choice between Rock, Paper, Scissors, Lizard and Spock: ");
        playerChoice = playerChoice.toLowerCase();
        let playerSelection = choiceArray.indexOf(playerChoice);
        let choiceExists = choiceArray.find(choice => playerChoice === choice)
        let computerChoice = computerPlay();
        computerSelection = choiceArray.indexOf(computerChoice);
        if (choiceExists == undefined) {
            console.log("Wrong input! Kindly make a choice between Rock, Paper, Scissors, Lizard and Spock. Restart App");
            return 0;
        }
        else {
            let round = playRound(playerSelection, computerSelection);
            if (round == playerWin)
            {
                playerScore += 1;
                console.log(round);
            }
            else if (round == compWin)
            {
                compScore += 1;
                console.log(round);
            }
            else
            {
                tiedScore += 1;
                console.log(round);
            }
        }
    }
    let absTie = tiedScore > playerScore && tiedScore > compScore;
    if (absTie){
       return "Its a tie!";
    }
    else if (compScore == playerScore && !absTie){
        return "Its a tie!"
    }
    else{
        return compScore > playerScore ? "You lose!" : "You win!";
    }
}
console.log(game())
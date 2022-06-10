function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
computerPlay = ()=>{
    const choiceArray = ["Rock", "Paper", "Scissors", "Lizard", "Spork"];
    const myMax = choiceArray.length-1;
    const myMin = 0;
    const idx = randomRange(myMin, myMax);
    const compChoice = choiceArray[idx];
    return compChoice;
}
console.log(computerPlay());
computerSelection = computerPlay();
playSingleRound = (playerSelection, computerSelection)=>{
    
}
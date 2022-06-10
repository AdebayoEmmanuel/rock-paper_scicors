# rock-paper_scicors
This is a mini project from my Full Stack Web Development Foundation course at The Odin's Project. Though the project is almost entirely written in JavaScript at the time of creation, it is more of a problem-solving effort than a coding project, hence the README.md file will contain flowcharts and some scribbled thought processes. This initial version runs solely on the console; as I progress through The Odin's Project curriculum, further functionalities will be added, and the project will be revisited and adjusted accordingly.

## Quick Start:
* clone this Repository
    ```bash
    cd rock-paper_scicors/app
    node script.js
    ```

## Rock Paper Scissors Lizard Spock game flow :
<img src="https://user-images.githubusercontent.com/92952014/173149964-bac77dce-7f6c-4ea9-ac9c-f7efdec2b9a8.png" 
        alt="logo" 
        width="400" 
        height="300" 
        style="display: block; margin: 0 auto" />

## Simple Work Flow:
* Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    * Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
* Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
```javascript
function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
```
* Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    * Remember loops? This is a great opportunity to use one to play those five rounds:
    ```javascript
    for (let i = 0; i < 5; i++) {
        // your code here!
    }
    ```
    *  At this point you should be using console.log() to display the results of each round and the winner at the end.
    * Use prompt() to get input from the user. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt" target="_blank" rel="noreferrer">Read the docs here if you need to.</a>
    * Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    * Feel free to create more “helper” functions if you think it would be useful.

# But we enjoy doing hard things, maybe someday I'll document how I added Lizard and Spock.

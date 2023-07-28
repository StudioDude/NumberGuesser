let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {

    return Math.floor(Math.random() * 10);

}

function compareGuesses(userGuess, compGuess, secretNumber) {

    const userDifference = Math.floor(userGuess - secretNumber);
    const compDifference = Math.floor(compGuess - secretNumber);

    return userDifference <= compDifference;

    /* if (userDifference <= compDifference) {
        return true;
    } else {
        return false;
    } */
} 

function getAbsoluteDistance() {

}

function updateScore(winner) {

    switch(winner) {
      case 'human':
        humanScore++;
        break;
    case 'computer':
        computerScore++;
    }
}

function advanceRound() {

    return currentRoundNumber++;

}


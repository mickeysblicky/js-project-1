const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// computer #1
function computerPlay(objects) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const item = objects[randomIndex];
    return item;
}

const array = [rock, paper, scissors];
const result = computerPlay(array);
console.log(result);


//player

const answer = prompt("What do you choose? Rock, paper, or scissors?");



function gameRound2(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection === scissors) {
        return ('You win! Rock beats scissors');
    } else if (playerSelection.toLowerCase() =="rock" && computerSelection === paper) {
        return ('You lose. Paper beats rock');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === rock) {
        return ('You lose. Rock beats scissors');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === paper) {
        return ('You win!. Scissors beats paper.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === rock) {
        return ('You win!. Paper beats rock.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === scissors) {
        return ('You lose. Scissors beats paper.');
    }
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection === rock) {
        return ('Draw. No one wins.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == paper) {
        return ('Draw. No one wins.');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === scissors) {
        return ('Draw. No one wins.');
    }
    
}

const playerSelection = answer;
console.log(playerSelection);
const computerSelection = result;
console.log(gameRound2(playerSelection, computerSelection));

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// computer
function computerPlay(objects) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const item = objects[randomIndex];
    return item;
}

const array = [rock, paper, scissors];

let playerWin = 0;
let computerWin = 0;

function gameRound(playerSelection, computerSelection,) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection === scissors) {
        return ('You win! Rock beats scissors.');
    } else if (playerSelection.toLowerCase() =="rock" && computerSelection === paper) {
        return ('You lose. Paper beats rock.');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === rock) {
        return ('You lose. Rock beats scissors.');
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

function win(playerSelection, computerSelection,) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection === scissors) {
        playerWin++;
    } else if (playerSelection.toLowerCase() =="rock" && computerSelection === paper) {
        computerWin++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === rock) {
        computerWin++;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === paper) {
        playerWin++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === rock) {
        playerWin++;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === scissors) {
        computerWin++;
    }
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection === rock) {
        
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == paper) {
        
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === scissors) {
        
    }
}
    
game();

function game() {
    for (let i = 0; i < 5; i++) {
        const computerAnswer = computerPlay(array);
        console.log(computerAnswer);
        const playerAnswer = prompt("What do you choose? Rock, paper, or scissors?");
        console.log(playerAnswer);
        console.log(gameRound(playerAnswer, computerAnswer));
        win(playerAnswer, computerAnswer);
        console.log('Player Score: ' + playerWin + ' Computer Score: ' + computerWin );
        
        if (playerWin === 3) {
            console.log('Game over! You won the game!');
            console.log('Final Score: Player : ' + playerWin + ' Computer: ' + computerWin);
            break;
        } else if (computerWin === 3) {
            console.log('Game over. The computer won the game.')
            console.log('Final Score: Player : ' + playerWin + ' Computer: ' + computerWin);
            break;
        } else if (playerWin === 2 && computerWin === 2) {
            console.log('Draw. Nobody won.');
        }
    }
}

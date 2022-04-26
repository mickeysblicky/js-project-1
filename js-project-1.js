const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const array = [rock, paper, scissors];
const html = document.querySelector('html');
const h1 = document.querySelector('h1');
const wiiSports = document.querySelector('audio');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttonContainer = document.querySelector('#buttons');
const buttons = document.querySelectorAll('button');
const removeButtondiv = document.createElement('div');
let playerWin = 0;
let computerWin = 0;

score.appendChild(playerScore);
score.appendChild(computerScore);


// computer
function computerPlay(objects) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const item = objects[randomIndex];
    return item;
}

function displayResults(str) {
    results.textContent = str
}

function displayScore(str, str2) {
    playerScore.textContent = str;
    computerScore.textContent = str2;
}

function gameRound(playerSelection, computerSelection,) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection === scissors) {
        return ('You win! Rock beats scissors.');
    } else if (playerSelection.toLowerCase() =="rock" && computerSelection === paper) {
        return ('You lose. Paper beats rock.');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === rock) {
        return ('You lose. Rock beats scissors.');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === paper) {
        return ('You win! Scissors beats paper.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === rock) {
        return ('You win! Paper beats rock.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection === scissors) {
        return ('You lose. Scissors beats paper.');
    }
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection === rock) {
        return ('Draw.');
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == paper) {
        return ('Draw.');
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection === scissors) {
        return ('Draw.');
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
}

function game() {
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const randomPlay = computerPlay(array);
            win(button.id, randomPlay);
            displayScore(playerWin, computerWin);
            displayResults(gameRound(button.id, randomPlay));
            if (playerWin === 5) {
                results.textContent = 'Game over! You won the game!';
                removeButtons(buttonContainer);
                removeButtons(h1);
                moveBack(playerScore, computerScore);
                confetti(html);
            } else if (computerWin === 5) {
                results.textContent = 'Game over. The computer won the game.';
                removeButtons(buttonContainer);
                removeButtons(h1);
                moveBack(playerScore, computerScore);
                confetti(html);
            }
        });
    });
}

function removeButtons(e) {
    e.removeAttribute('id');
    e.classList.add('removingButtons');
}

function moveBack(e, f) {
    e.classList.add('movingBack');
    f.classList.add('movingBack');
}

function confetti(e) {
    e.setAttribute('style', "background: url('./images/confetti-4.gif')bottom center;" );
    wiiSports.play();
}

game();



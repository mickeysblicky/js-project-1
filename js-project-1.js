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



// computer #2
function computerPlay2(objects2) {
    const randomIndex2 = Math.floor(Math.random() * objects2.length);
    const item2 = objects2[randomIndex2];
    return item2;
}

const array2 = [rock, paper, scissors];
const result2 = computerPlay2(array2);
console.log(result2);

function gameRound2(computer1Selection, computer2Selection) {
    if (computer1Selection === rock && computer2Selection === scissors) {
        return ('Computer 1 wins. Rock beats scissors');
    } else if (computer1Selection === rock && computer2Selection === paper) {
        return ('Computer 2 wins. Paper beats rock');
    } else if (computer1Selection === scissors && computer2Selection === rock) {
        return ('Computer 2 wins. Rock beats scissors');
    } else if (computer1Selection === scissors && computer2Selection === paper) {
        return ('Computer 1  wins. Scissors beats paper.');
    } else if (computer1Selection === paper && computer2Selection === rock) {
        return ('Computer 1 wins. Paper beats rock.');
    } else if (computer1Selection === paper && computer2Selection === scissors) {
        return ('Computer 2 wins. Scissors beats paper.');
    }
    
    if (computer1Selection === rock && computer2Selection === rock) {
        return ('Draw. No one wins.');
    } else if (computer1Selection === paper && computer2Selection == paper) {
        return ('Draw. No one wins.');
    } else if (computer1Selection === scissors && computer2Selection === scissors) {
        return ('Draw. No one wins.');
    }
    
}

const computer1Selection = result;
const computer2Selection = result2;
console.log(gameRound2(computer1Selection, computer2Selection));

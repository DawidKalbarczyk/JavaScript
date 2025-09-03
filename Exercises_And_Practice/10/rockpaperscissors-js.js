let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updateScoreElement();
/*
if (score === null) {
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
}

 */
function pickComputerMove() {
    let computerMove;
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < (1 / 3)) {
        computerMove = 'rock';
    } else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}


function playGame (playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }


    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'Tie.') {
        score.ties++;
    } else if (result === 'You lose.') {
        score.loses++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    updateResultElement();
    updateMovesElement();

    function updateResultElement() {
        document.querySelector('.js-result')
            .innerHTML = result;
    }
    function updateMovesElement() {
        document.querySelector('.js-moves')
            .innerHTML = `You
                <img src="icons/${playerMove}-emoji.png" class="pick-image">
                <img src="icons/${computerMove}-emoji.png" class="pick-image">
                Computer`;
    }

}
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}


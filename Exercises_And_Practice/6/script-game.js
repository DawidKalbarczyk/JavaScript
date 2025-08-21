document.getElementById('rockButton').onclick = function() {
    let compPick = Math.random();
    let compResult = '';
    let result = '';
    console.log(compPick);
    if (compPick <= (1/3)) {
        compResult = 'rock';
    } else if (compPick <= (2/3) && compPick >= (1/3)) {
        compResult = 'paper';
    } else {
        compResult = 'scissors';
    }
    console.log(compResult);
    if (compResult === 'rock') {
        result = 'Tie.';
    } else if (compResult === 'paper') {
        result = 'You lose.';
    } else if (compResult === 'scissors') {
        result = 'You win.';
    }
    alert(`You picked rock. Computer picked ${compResult}. ${result}`);
    console.log(result);
}

document.getElementById('paperButton').onclick = function() {
    let compPick = Math.random();
    let compResult = '';
    let result = '';
    console.log(compPick);
    if (compPick <= (1/3)) {
        compResult = 'rock';
    } else if (compPick <= (2/3) && compPick >= (1/3)) {
        compResult = 'paper';
    } else {
        compResult = 'scissors';
    }
    console.log(compResult);
    if (compResult === 'rock') {
        result = 'You win.';
    } else if (compResult === 'paper') {
        result = 'Tie.';
    } else if (compResult === 'scissors') {
        result = 'You lose.';
    }
    alert(`You picked paper. Computer picked ${compResult}. ${result}`);
    console.log(result);
}

document.getElementById('scissorsButton').onclick = function() {
    let compPick = Math.random();
    let compResult = '';
    let result = '';
    console.log(compPick);
    if (compPick <= (1/3)) {
        compResult = 'rock';
    } else if (compPick <= (2/3) && compPick >= (1/3)) {
        compResult = 'paper';
    } else {
        compResult = 'scissors';
    }
    console.log(compResult);
    if (compResult === 'rock') {
        result = 'You lose.';
    } else if (compResult === 'paper') {
        result = 'You win.';
    } else if (compResult === 'scissors') {
        result = 'Tie.';
    }
    alert(`You picked scissors. Computer picked ${compResult}. ${result}`);
    console.log(result);
}
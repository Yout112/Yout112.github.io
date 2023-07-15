let PlayerWin = 0
let ComputerWin = 0
let playerScore = document.querySelector('.playerScore')
let computerScore = document.querySelector('.computerScore')
let process = document.querySelector('.process')
let Rock = document.querySelector('.Rock')
let Paper = document.querySelector('.Paper')
let Scissors = document.querySelector('.Scissors')
let Games = document.querySelector('.Games')
let gamecount = 0
window.addEventListener('load', function () { })

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    if (a == 0) {
        return 'Rock'
    }
    else if (a == 1) {
        return 'Paper'
    }
    else if (a == 2) {
        return 'Scissors'
    }
}



Rock.addEventListener('click', () => {
    if (gamecount < 5) { Playround(getComputerChoice(), 'Rock') }
    else { total() }
});
Paper.addEventListener('click', () => {
    if (gamecount < 5) { Playround(getComputerChoice(), 'Paper') }
    else { total() }
});
Scissors.addEventListener('click', () => {
    if (gamecount < 5) { Playround(getComputerChoice(), 'Scissors') }
    else { total() }
});
function Playround(computer, player) {

    if (computer == player) {
        process.innerHTML = 'Draw!'
        gamecount++
        return
    }
    else if (computer == 'Rock' && player == 'Paper') {
        process.innerHTML = 'Paper beats Rock! You win!'
        PlayerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
    else if (computer == "Rock" && player == "Scissors") {
        process.innerHTML = 'Rock beats scissors!You loose!'
        ComputerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
    else if (computer == "Paper" && player == 'Rock') {
        process.innerHTML = 'Paper beats Rock! You loose!'
        ComputerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
    else if (computer == "Scissors" && player == 'Rock') {
        process.innerHTML = 'Rock beats Scissors! You win!'
        PlayerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
    else if (computer == 'Paper' && player == 'Scissors') {
        process.innerHTML = 'Scissors beats Paper! You win!'
        PlayerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
    else if (computer == "Scissors" && player == 'Paper') {
        process.innerHTML = 'Scissors beats paper! You loose'
        ComputerWin++
        playerScore.innerHTML = 'Player score: ' + PlayerWin
        computerScore.innerHTML = 'Computer win: ' + ComputerWin
        gamecount++
        return
    }
}
console.log(gamecount)

function total() {
    if (gamecount == 5) {
        if (PlayerWin > ComputerWin) {
            Games.innerHTML = 'You win!'

        }
        else if (PlayerWin < ComputerWin) {
            Games.innerHTML = 'You lose!'

        }
        else if (PlayerWin == ComputerWin) {
            Games.innerHTML = 'Draw!'

        }
    }
}


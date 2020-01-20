let timerId;
let startButton = document.getElementById('htmlStartButton')
let restartButton = document.getElementById('htmlRestartButton')
let scoreBoard = document.getElementById('htmlScoreBoard')
let playerScore = 0;
let container = document.getElementById('container')


startButton.addEventListener('click', onStartButtonClick);
restartButton.addEventListener('click', onRestartButtonClick);


function onStartButtonClick() {

    container.classList.remove('hidden')
    startButton.classList.add('hidden')
    playerScore = 0;
    htmlScoreBoard.innerHTML = 'Score: ' + playerScore;
    activeRandomSquare()
}

function onRestartButtonClick() {


    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('failed')
    }

    restartButton.classList.add('hidden')
    playerScore = 0;
    htmlScoreBoard.innerHTML = 'Score: ' + playerScore;
    activeRandomSquare()
}


let squares = document.getElementsByClassName('q')


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', onButtonClick)

}


function onButtonClick(event) {

    if (event.target.classList.contains('active')) {

        activeRandomSquare()
        playerScore++;
        htmlScoreBoard.innerHTML = 'Score: ' + playerScore;
    } else {
        gameOver()
    }
}

function activeRandomSquare() {
    clearTimeout(timerId);
    timerId = setTimeout(gameOver, 1950);

    let activeIndex = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('active')) {

            activeIndex = i;
            squares[i].classList.remove('active')
        }

    }
    let randomIndex = Math.round(Math.random() * (squares.length - 1));


    while (randomIndex == activeIndex) {
        randomIndex = Math.round(Math.random() * (squares.length - 1));
    }
    squares[randomIndex].classList.add('active')
}

function gameOver() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('active');
        squares[i].classList.add('failed');
        restartButton.classList.remove('hidden');
    }
}
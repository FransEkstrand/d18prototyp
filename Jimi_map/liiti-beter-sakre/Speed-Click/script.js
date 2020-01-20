const startButton = document.getElementById('start-button');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const youLooseTextElement = document.getElementById('you-loose-text-element');
const playerScore = document.getElementById('score');
const rightPanel = document.getElementsByClassName('wrapper2')
const leftPanel = document.getElementsByClassName('wrapper3')
const resultHistoryElement = document.getElementById('result-history-element')
const highscoreElement = document.getElementById('highscore-element')



let timeOutId;
let yesButtonTimeMs;
let playCount = 0;

function restart() {
    youLooseTextElement.style.display = 'none';
    startButton.style.display = '';
    playerScore.style.display = 'none';
}

startButton.addEventListener('click', onStartButtonClick);
noButton.addEventListener('click', onNoButtonClick);
yesButton.addEventListener('click', onYesButtonClick);

function onStartButtonClick(event) {
    startButton.style.display = 'none';
    noButton.style.display = '';


    let timeMs = 1000 + Math.round(Math.random() * 9000)
    timeOutId = setTimeout(showYesButton, timeMs)




}

function onNoButtonClick(event) {
    noButton.style.display = 'none';
    youLooseTextElement.style.display = '';
    clearTimeout(timeOutId);
    gameOver()
    setTimeout(restart, 2000);
}

function onYesButtonClick(event) {

    yesButton.style.display = 'none';

    playerScore.style.display = '';
    const currentTime = new Date();
    const currentTimeInMs = currentTime.getTime();
    const reactionTimeMs = currentTimeInMs - yesButtonTimeMs;
    playerScore.innerHTML = 10000 - reactionTimeMs;
    setTimeout(restart, 4000);
    leftPanel[0].style.display = '';
    gameOver(reactionTimeMs)

}

function showYesButton() {
    noButton.style.display = 'none';
    yesButton.style.display = '';
    const currentTime = new Date()
    yesButtonTimeMs = currentTime.getTime();
}

function gameOver(score) {
    playCount++;
    if (typeof score == 'undefined') {
        score = 10000
    } else if (10000 - score <= 0) {
        score = 10000
    }
    console.log(score);
    resultHistoryElement.innerHTML = `
    <li>${10000 - score} Points! <span>:${playCount}</span></li>
    ` + resultHistoryElement.innerHTML;
}
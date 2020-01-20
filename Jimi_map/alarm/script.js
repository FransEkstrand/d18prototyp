const formElement = document.getElementById('form');
const timeInput = document.getElementById('timer-input');
const timerTextElement = document.getElementById('timer-text-element');

const alarmSfx = new Audio('Pickup_Coin.wav');
const tickSfx = new Audio('Jump.wav');

let timeId;
let timeLeft;

formElement.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    formElement.style.display = 'none';
    timerTextElement.style.display = '';

    timeLeft = parseInt(timeInput.value);
    timerTextElement.innerHTML = timeLeft;

    startTimer();

}

function hideUi() {
    formElement.style.display = 'none';
    timerTextElement.style.display = '';
}

function showUi() {
    formElement.style.display = '';
    timerTextElement.style.display = 'none';
}


function startTimer() {

    hideUi();
    timerId = setInterval(timerTick, 1000);
    timerTick();
}

function stopTimer() {
    clearInterval(timerId)
    setTimeout(showUi, 1000);
}

function timerTick() {
    console.log(timeLeft);
    timeLeft--;
    if (timeLeft < 0) {
        alarmSfx.play();
        stopTimer();
    } else {
        tickSfx.play();

    }
}
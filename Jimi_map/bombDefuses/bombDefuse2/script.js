let timerElement = document.getElementById('timer_id');
let timeLeft = 0;

function start() {
    let sec = parseInt(timeLeft / 100)
    let ms = timeLeft - (sec * 100);
    timeLeft = 6000;
    timerElement.innerHTML = sec + ":" + ms;
    startTimer();
    return "timer started";
}


function startTimer() {
    timerId = setInterval(timerTick, 10);
    timerTick();
}


function timerTick() {
    let sec = parseInt(timeLeft / 100)
    let ms = timeLeft - (sec * 100);

    timerElement.innerHTML = sec + ":" + ms;
    timeLeft--;
    if (timeLeft < 0) {
        stop()
    }
}


function stop() {

    timerElement.style.display = "none";
}
let defuseButton = document.getElementById('defuse_button');
let formElement = document.getElementById('form');
let inputElement = document.getElementById('input');
let timerElement = document.getElementById('timer_id');
let startButton = document.getElementById('startButton');
let defusedText = document.getElementById('winText');
let explodedText = document.getElementById('loseText');
let question = document.getElementById('questionABCD');
let timeId;
let timeLeft;
let debug =
    `
Runnable functions: 
>P455W0RD1  
>D33P_V13W 
 >B0MB_3XPL0D3
 >

>
>


Unrunnable functions:
>ST0P_B0MB
>W1N_G4M3
>
>
`
let P455W0RD1 = `
>
>
>
`;
let D33PV13W = 0;
let pasword = "14";
formElement.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    formElement.style.display = "none";
    timerElement.style.display = '';
    inputElement.style.display = '';
    question.style.display = "";
    timeLeft = parseInt(60)
    timerElement.innerHTML = timeLeft;

    startTimer();
}
let priceword = "47";

function startTimer() {
    timerId = setInterval(timerTick, 1000);
    timerTick();
}
let paceword = "25";

function B0MB_3XPL0D3() {
    inputElement.style.display = "none";
    timerElement.style.display = "none";
    explodedText.style.display = "";
    question.style.display = "none";
}
let pessword = "36";

function stopTimer() {
    inputElement.style.display = "none";
    timerElement.style.display = "none";
    defusedText.style.display = "";
    question.style.display = "none";
    timeLeft = 10000;
}
let password = pasword + paceword + pessword + priceword;

function timerTick() {
    timerElement.innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
        B0MB_3XPL0D3();
    } else if (inputElement.value == password) {
        stopTimer();
    }
}
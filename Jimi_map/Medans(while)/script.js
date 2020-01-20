//      VARIABLES


let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let resetButton = document.getElementById('resetButton')
let correctPress = document.getElementById('correct-press')
let wrongPress = document.getElementById('wrong-press')


//      EVENTS


resetButton.addEventListener('click', resetButtonPress);
button4.addEventListener('click', correctButtonPress);
button1.addEventListener('click', wrongButtonPress);
button3.addEventListener('click', wrongButtonPress);
button2.addEventListener('click', wrongButtonPress);


//      FUNCTIONS


function correctButtonPress() {
    correctPress.style.display = '';
    resetButton.style.display = '';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button4.style.display = 'none';
}

function wrongButtonPress() {
    wrongPress.style.display = '';
    resetButton.style.display = '';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button4.style.display = 'none';
}

function resetButtonPress() {
    correctPress.style.display = 'none ';
    wrongPress.style.display = 'none';
    resetButton.style.display = 'none';
    button1.style.display = '';
    button2.style.display = '';
    button3.style.display = '';
    button4.style.display = '';
}
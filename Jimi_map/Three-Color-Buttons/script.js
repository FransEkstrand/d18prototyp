let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

red.addEventListener('click', redButtonClick);

function redButtonClick() {
    alert('You pressed the Red button!');


}

green.addEventListener('click', greenButtonClick);

function greenButtonClick() {
    alert('You pressed the Green button!');


}

blue.addEventListener('click', blueButtonClick);

function blueButtonClick() {
    alert('You pressed the Blue button!');


}
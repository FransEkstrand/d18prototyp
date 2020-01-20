let input = document.getElementById('number');
let button = document.getElementById('button');
let resultElement = document.getElementById('result');
let guessAmmount = document.getElementById('guesses')
let numberToGuess = Math.round(Math.random() * 20);
button.addEventListener('click', onButtonClicked);
count = 1;


function onButtonClicked(event) {
    event.preventDefault();


    let guessedNumber = parseInt(input.value);
    if (guessedNumber === numberToGuess) {
        resultElement.innerHTML = 'You guessed the correct number!';
        document.getElementById('button').disabled = true;
        document.getElementById('number').disabled = true;
        document.getElementById('')
    } else if (guessedNumber < 0) {
        resultElement.innerHTML = 'The guessed number must be between 0 and 20.';
    } else if (guessedNumber > 20) {
        resultElement.innerHTML = 'The guessed number must be between 0 and 20.';
    } else if (guessedNumber < numberToGuess) {
        resultElement.innerHTML = 'Your guess is too low';
    } else if (guessedNumber > numberToGuess) {
        resultElement.innerHTML = 'Your guess is too high';
    } else {
        resultElement.innerHTML = 'Your guess must be a number';
    }


    button.onclick = function () {
        count += 1;
        guessAmmount.innerHTML = 'Guesses ' + count + ' !';
    };



}
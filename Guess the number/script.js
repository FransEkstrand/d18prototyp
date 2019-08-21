let input = document.getElementById('number');
let button = document.getElementById('button'),
    count = 0;
button.onclick = function () {
    count += 1;
    result.innerHTML = "Click me: " + count;
};

let resultElement = document.getElementById('result');
let numberToGuess = Math.round(Math.random() * 20);
button.addEventListener('click', onButtonClicked);



function onButtonClicked(event) {
    event.preventDefault();


    let guessedNumber = parseInt(input.value);
    if (guessedNumber === numberToGuess) {
        resultElement.innerHTML = 'You guessed the correct number!';
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




}
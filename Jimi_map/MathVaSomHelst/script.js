let game = document.getElementById('wrapper');
let result = document.getElementById('result');


let number1 = document.getElementById('random-button1');
let number2 = document.getElementById('random-button2');
let number3 = document.getElementById('random-button3');
let number4 = document.getElementById('random-button4');

let question = document.getElementById('questions');



let questionCounter = document.getElementById('questionCounter');


let questionNumber = 1;
const numberOfQuestions = 10;


let randomNumber1 = Math.floor((Math.random() * 100))
let randomNumber2 = Math.floor((Math.random() * 100))


let rightCounter = 0;
let wrongCounter = 0;


let array = [number1, number2, number3, number4];


function resetNumbers() {


    number1.innerHTML = (Math.floor(Math.random() * 200))
    number2.innerHTML = (Math.floor(Math.random() * 200))
    number3.innerHTML = (Math.floor(Math.random() * 200))
    number4.innerHTML = (Math.floor(Math.random() * 200))


    randomNumber1 = (Math.floor(Math.random() * 100))
    randomNumber2 = (Math.floor(Math.random() * 100))


    question.innerHTML = randomNumber1 + ' + ' + randomNumber2;


    array[Math.floor(Math.random() * 4)].innerHTML = answer(randomNumber1, randomNumber2);


    questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions;

}


resetNumbers();



function answer(randomNumber1, randomNumber2) {
    return randomNumber1 + randomNumber2;
}


number1.addEventListener('click', guess);
number2.addEventListener('click', guess);
number3.addEventListener('click', guess);
number4.addEventListener('click', guess);




let resultText = document.getElementById('resultText');
let playAgain = document.getElementById('playAgain');
let helperText = document.getElementById('helperText');



result.style.display = 'none';



playAgain.addEventListener('click', playAgainFunction)



function playAgainFunction() {
    rightCounter = 0;
    wrongCounter = 0;
    questionNumber = 1;
    game.style.display = 'block';
    result.style.display = 'none';
    resetNumbers();
}



function guess() {

    if (parseInt(event.target.innerHTML) === answer(randomNumber1, randomNumber2)) {
        rightCounter += 1;

        resetNumbers();
    } else {
        wrongCounter += 1;

        resetNumbers();
    }
    if (questionNumber == numberOfQuestions) {
        questionCounter.innerHTML = questionNumber + ' / ' + numberOfQuestions;

        game.style.display = 'none';
        result.style.display = 'block';
        resultText.innerHTML = 'You got ' + rightCounter + ' out of ' + numberOfQuestions + '!';


        if (rightCounter >= 7) {
            helperText.innerHTML = 'Nice!';
        } else if (rightCounter <= 2) {
            helperText.innerHTML = 'You´ve got to try harder!';
        } else {
            helperText.innerHTML = 'Too bad!';
        }


    }

    questionNumber += 1;
}
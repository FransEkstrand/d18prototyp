let number1Input = document.getElementById('number1');
let number2Input = document.getElementById('number2');

let addButton = document.getElementById('add-button');
let subtractButton = document.getElementById('subtract-button');
let multiplyButton = document.getElementById('multiply-button');
let divisionButton = document.getElementById('division-button');

let resultElement = document.getElementById('result');


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtr);
multiplyButton.addEventListener('click', multi);
divisionButton.addEventListener('click', divis);




function add(event) {
    const number1 = parseFloat(number1Input.value)
    const number2 = parseFloat(number2Input.value)
    const sum = number1 + number2;
    if (number1 + number2) {
        resultElement.innerHTML = sum;
    } else {
        isNaN
        alert('Please enter a number')
    }
}

function subtr(event) {
    const number1 = parseFloat(number1Input.value)
    const number2 = parseFloat(number2Input.value)
    const sum = number1 - number2;
    if (number1 - number2) {
        resultElement.innerHTML = sum;
    } else if (sum === 0) {
        resultElement.innerHTML = 'Seriously you cant do this in your head ???';
    } else {
        isNaN
        alert('Please enter a number!')
    }
}

function multi(event) {
    const number1 = parseFloat(number1Input.value)
    const number2 = parseFloat(number2Input.value)
    const sum = number1 * number2;
    if (number1 * number2) {
        resultElement.innerHTML = sum;
    } else {
        isNaN
        alert('Please enter a number')
    }
}

function divis(event) {
    const number1 = parseFloat(number1Input.value)
    const number2 = parseFloat(number2Input.value)
    const sum = number1 / number2;
    if (number1 / number2) {
        resultElement.innerHTML = sum;
    } else {
        isNaN
        alert('Please enter a number')
    }
}
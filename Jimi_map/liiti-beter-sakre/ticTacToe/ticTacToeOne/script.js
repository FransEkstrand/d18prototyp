const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
let gameOver = false;

const q0 = document.getElementById('q0');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const container = document.getElementById('container');


const qArray = document.getElementsByClassName('q');


for (let i = 0; i < qArray.length; i++) {
    qArray[i].addEventListener('click', sqareClick);
}
let gameLength = 0;

function sqareClick(event) {
    if (event.target.innerHTML == "" && gameOver == false) {
        if (gameLength % 2 == 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = 'O';
        }
        gameLength++;
    }


}


function checkIfWon() {
    if (q0.innerHTML == "X" && q1.innerHTML == "X" && q2.innerHTML == "X") {
        stopGame()
    }
    if (q3.innerHTML == "X" && q4.innerHTML == "X" && q5.innerHTML == "X") {
        stopGame()
    }
    if (q6.innerHTML == "X" && q7.innerHTML == "X" && q8.innerHTML == "X") {
        stopGame()
    }
    if (q0.innerHTML == "X" && q4.innerHTML == "X" && q8.innerHTML == "X") {
        stopGame()
    }
    if (q2.innerHTML == "X" && q4.innerHTML == "X" && q6.innerHTML == "X") {
        stopGame()
    }
    if (q0.innerHTML == "X" && q3.innerHTML == "X" && q6.innerHTML == "X") {
        stopGame()
    }
    if (q1.innerHTML == "X" && q4.innerHTML == "X" && q7.innerHTML == "X") {
        stopGame()
    }
    if (q2.innerHTML == "X" && q5.innerHTML == "X" && q8.innerHTML == "X") {
        stopGame()
    }




    if (q0.innerHTML == "O" && q1.innerHTML == "O" && q2.innerHTML == "O") {
        stopGame()
    }
    if (q3.innerHTML == "O" && q4.innerHTML == "O" && q5.innerHTML == "O") {
        stopGame()
    }
    if (q6.innerHTML == "O" && q7.innerHTML == "O" && q8.innerHTML == "O") {
        stopGame()
    }
    if (q0.innerHTML == "O" && q4.innerHTML == "O" && q8.innerHTML == "O") {
        stopGame()
    }
    if (q2.innerHTML == "O" && q4.innerHTML == "O" && q6.innerHTML == "O") {
        stopGame()
    }
    if (q0.innerHTML == "O" && q3.innerHTML == "O" && q6.innerHTML == "O") {
        stopGame()
    }
    if (q1.innerHTML == "O" && q4.innerHTML == "O" && q7.innerHTML == "O") {
        stopGame()
    }
    if (q2.innerHTML == "O" && q5.innerHTML == "O" && q8.innerHTML == "O") {
        stopGame()
    }
}


function stopGame() {
    gameOver = true;

}
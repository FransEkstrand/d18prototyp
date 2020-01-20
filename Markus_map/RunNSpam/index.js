let speedBox = document.getElementById('current-speed');
let jumpBox = document.getElementById('jump-time');
let runAnimation = document.getElementById('run-effect');
let jumpAnimation = document.getElementById('jump-effect');

let speed = 0;
let initialSpeed = 10;
let maxSpeed = 60;
let deaccelerator;

start()

function start() {

    let startTime = Date.now;
    speed = initialSpeed;
    document.addEventListener('keyup', accelerate)
    deaccelerator = setInterval(deaccelerate, 300)
}



function accelerate(e) {
    if (e.key == "s") {
        if (speed < maxSpeed) {
            speed++;
            toScreen(speed);
            runAnimation.style.display = "";
            jumpAnimation.style.display = "none";
        }

    }
    if (e.key == "j") {
        jumpAnimation.style.display = "";
        runAnimation.style.display = "none";
        document.removeEventListener('keyup', accelerate);
        setTimeout(function () {
            document.addEventListener('keyup', accelerate)
        }, 1000)
    }

}

function toScreen(message) {
    speedBox.innerHTML = message;
}


function deaccelerate() {
    if (speed > 0) {
        speed--
        toScreen(speed);
    } else {
        gameOver()
    }



}

function gameOver() {
    let stopTime = Date.now;
    clearInterval(deaccelerator);
    document.removeEventListener('keyup', accelerate);

}
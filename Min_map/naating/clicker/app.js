let chiliFruit = document.getElementById("chili-pepper");
let clicks = document.getElementById('clicks-box');
let powerUp1 = document.getElementById('powerUp1')
let powerUp2 = document.getElementById('powerUp2')
let powerUp3 = document.getElementById('powerUp3')
let clickDamage = 1;
let powerUpCost1 = 10;
let powerUpCost2 = 3000;
let powerUpCost3 = 100000;
let currentClicks = 0;

chiliFruit.addEventListener('click', onChiliClicked)
powerUp1.addEventListener('click', buyPowerUp1);
powerUp2.addEventListener('click', buyPowerUp2);
powerUp3.addEventListener('click', buyPowerUp3);

function buyPowerUp1() {
    if (powerUpCost1 <= currentClicks) {
        currentClicks = currentClicks - powerUpCost1;
        clickDamage = clickDamage * 1.05;
        powerUpCost1 = powerUpCost1 * 1.05;
        clicks.innerHTML = Math.floor(currentClicks);
        powerUp1.innerHTML = "Buy:" + Math.floor(powerUpCost1);
    }
    console.log("onpower clicked");
}

function buyPowerUp2() {
    if (powerUpCost2 <= currentClicks) {
        currentClicks = currentClicks - powerUpCost2;
        clickDamage = clickDamage * 1.2;
        powerUpCost2 = powerUpCost2 * 1.2;
        clicks.innerHTML = Math.floor(currentClicks);
        powerUp2.innerHTML = "Buy:" + Math.floor(powerUpCost2);
    }
    console.log("onpower2 clicked");
}

function buyPowerUp3() {
    if (powerUpCost3 <= currentClicks) {
        currentClicks = currentClicks - powerUpCost3;
        clickDamage = clickDamage * 1.2;
        powerUpCost3 = powerUpCost3 * 1.2;
        clicks.innerHTML = Math.floor(currentClicks);
        powerUp3.innerHTML = "Buy:" + Math.floor(powerUpCost3);
    }
    console.log("onpower3 clicked");
}


function onChiliClicked() {
    console.log("onchili clicked");

    currentClicks = currentClicks + clickDamage;
    clicks.innerHTML = Math.floor(currentClicks);
}
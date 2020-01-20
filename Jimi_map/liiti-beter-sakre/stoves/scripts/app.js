let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');

plusButton.addEventListener('click', onPlusButtonClicked);
minusButton.addEventListener('click', onMinusButtonClicked);
let heat2 = 0;

const stoves = [];
for (let i = 0; i < 4; i++) {
    const stove = new Stove();
    document.body.appendChild(stove.element);
    stoves.push(stove);
}

function onPlusButtonClicked() {
    for (let i = 0; i < stoves.length; i++) {
        if (stoves[i].isActive) {

            stoves[i].increaseHeat();

        }
    }
}

function onMinusButtonClicked() {
    for (let i = 0; i < stoves.length; i++) {
        if (stoves[i].isActive) {

            stoves[i].decreaseHeat();


        }
    }
}
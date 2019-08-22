let button1 = document.getElementById('button12')
let button2 = document.getElementById('button23')
let changingText = document.getElementById('magicText')
button1.addEventListener("click", onButtonOneClicked)
button2.addEventListener("click", onButtonTwoClicked)


function onButtonOneClicked() {
    changingText.innerHTML = 'Button 1 was clicked!';
}

function onButtonTwoClicked() {
    changingText.innerHTML = 'You clicked on Button 2!';
};
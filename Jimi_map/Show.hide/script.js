let button1 = document.getElementById('button1')
let changingText = document.getElementById('magicText')
button1.addEventListener("click", onButtonOneClicked)

function onButtonOneClicked() {
    if (changingText.style.display == 'none') {
        changingText.style.display = '';
        button1.innerHTML = 'Hide';
    } else {
        changingText.style.display = 'none';
        button1.innerHTML = 'Show';
    }
}
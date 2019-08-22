let age = document.getElementById('ageInput');
let name = document.getElementById('nameInput');
let p = document.getElementById('p');
let form = document.getElementById('form');
form.addEventListener('submit', onButtonPress)

function onButtonPress(event) {
    event.preventDefault();
    if (age.value > 17) {
        p.innerHTML = 'Hello ' + name.value + ' ! You are a adult.';
    } else if (age.value < 18) {
        p.innerHTML = 'Hello ' + name.value + ' ! You are not an adult.';
    }
}
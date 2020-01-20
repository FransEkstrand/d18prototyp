let clickAmmount = document.getElementById('click-ammount');
let numberAmmount = document.getElementById('number-Ammount')

let i = 0;

clickAmmount.addEventListener('click', addOneToClickAmmount);
console.log(i);

function addOneToClickAmmount() {
    i++;
    numberAmmount.innerHTML = i;
    console.log(i);
}
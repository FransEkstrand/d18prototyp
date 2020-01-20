let itemContainer = document.getElementById('item-container');
let addButton = document.getElementById('add-button');
let inputElement = document.getElementById('todo-input');


addButton.addEventListener('click', onAddButtonClick);



function onAddButtonClick(event) {
    event.preventDefault();
    createItem(inputElement.value);
}

function createItem(message) {
    let itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemContainer.appendChild(itemElement);
    let aElement = document.createElement('div');
    aElement.classList.add('checkbox')
    itemContainer.addEventListener('click', checkboxSwitch)
    itemElement.appendChild(aElement);
    let pElement = document.createElement('p');
    pElement.classList.add('item-message');
    pElement.textContent = message;
    itemElement.appendChild(pElement);
}

function checkboxSwitch(event) {
    event.preventDefault();
    event.target.parentNode.classList.toggle('completed')
}
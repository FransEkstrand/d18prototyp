const calculateButton = document.getElementById('calcbutton')
const cheese = document.getElementById('topping-extra-cheese')
const kebab = document.getElementById('topping-kebab')
const pepperoni = document.getElementById('toppin-pepperoni')
const pineapple = document.getElementById('topping-4')
const onion = document.getElementById('topping-5')
const priceElement = document.getElementById('price')


const pizzaSizeInput = document.getElementsByName('pizza-size')

calculateButton.addEventListener('click', calculatePrize)

function calculatePrize(event) {
    let price = 0;

    if (pizzaSizeInput[0].checked) {
        price += parseFloat(pizzaSizeInput[0].value);
    }
    if (pizzaSizeInput[1].checked) {
        price += parseFloat(pizzaSizeInput[1].value);
    }
    if (pizzaSizeInput[2].checked) {
        price += parseFloat(pizzaSizeInput[2].value);
    }
    if (cheese.checked) {
        price += parseFloat(cheese.value);
    }
    if (kebab.checked) {
        price += parseFloat(kebab.value);
    }
    if (pepperoni.checked) {
        price += parseFloat(pepperoni.value);
    }
    if (pineapple.checked) {
        price += parseFloat(pineapple.value);
    }
    if (onion.checked) {
        price += parseFloat(onion.value);
    }

    priceElement.innerHTML = "Price: " + price + "€";

}
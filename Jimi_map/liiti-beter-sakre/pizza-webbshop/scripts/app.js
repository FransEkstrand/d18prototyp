const pizzaMaker = new PizzaMaker({
    parentElement: document.body,
    pizzaSizes: [
        new PizzaSize('Small', 3),
        new PizzaSize('Medium', 5),
        new PizzaSize('Large', 7)
    ],
    toppings: [
        new Topping('Extra Cheese', 1),
        new Topping('Pineapple', 0.8),
        new Topping('Blue Cheese', 0.5),
        new Topping('Onion', 2)
    ]
})
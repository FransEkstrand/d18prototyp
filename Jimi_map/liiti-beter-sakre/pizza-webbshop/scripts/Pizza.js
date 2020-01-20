class Pizza {
    constructor(size) {
        this.size = size;
        this.toppings = [];
    }

    getPrice() {
        let price = 0;

        price += this.size.price;

        for (let i = 0; i < this.toppings.length; i++) {
            price += this.toppings[i].price;
        }

        return price;
    }

    addTopping(topping) {
        this.toppings.push(topping)
    }

    removeTopping(topping) {
        const index = this.toppings.indexOf(topping);
        this.toppings.splice(index, 1);
    }
}
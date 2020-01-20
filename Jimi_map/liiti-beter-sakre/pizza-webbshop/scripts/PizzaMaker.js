class PizzaMaker {


    /**
     *  Creates a new PizzaMaker object.
     * @param {Object} config 
     * @param {HTMLElement} config.parentElement
     * @param {PizzaSize[]} config.pizzaSizes
     * @param {Toppings[]} config.toppings
     *  
     */
    constructor(config) {
        this.parentElement = config.parentElement;
        this.pizzaSizes = config.pizzaSizes;
        this.toppings = config.toppings;
        this.pizza = new Pizza(this.pizzaSizes[0]);

        this._createElement();
        this._createPizzaSizeDropDownElement();
        this._createToppingElements();
        this._createPriceElement();
    }


    _createElement() {

        this.element = document.createElement('div');
        this.element.classList.add('pizza-maker');

        const title = document.createElement('h3');
        title.innerText = 'Pizza Maker';
        this.element.appendChild(title);

        this.parentElement.appendChild(this.element);

    }

    _createPizzaSizeDropDownElement() {
        const label = document.createElement('label');
        label.htmlFor = 'pizza-size';
        label.innerText =

            this.sizeDropDownElement = document.createElement('select');
        this.sizeDropDownElement.name = 'pizza-size'

        this.element.appendChild(this.sizeDropDownElement);

        for (let i = 0; i < this.pizzaSizes.length; i++) {
            const optionElement = document.createElement('option');
            optionElement.innerText = this.pizzaSizes[i].name;
            optionElement.value = i;
            this.sizeDropDownElement.appendChild(optionElement);
        }
        this.sizeDropDownElement.addEventListener('change', this._onSizeElementChanged.bind(this))
    }

    _createToppingElements() {


        for (let i = 0; i < this.toppings.length; i++) {
            const toppingContainer = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'topping-' + i;
            checkbox.value = i;
            toppingContainer.appendChild(checkbox);

            const label = document.createElement('label');
            label.htmlFor = checkbox.name;
            label.innerText = this.toppings[i].name;
            toppingContainer.appendChild(label);

            this.element.appendChild(toppingContainer);

            checkbox.addEventListener('change', this._onToppingElementChanged.bind(this));

        }

    }
    _createPriceElement() {
        this.priceElement = document.createElement('div');
        this.element.appendChild(this.priceElement);
        this._updatePriceElement();
    }

    _updatePriceElement() {
        this.priceElement.innerText = 'Price: ' + this.pizza.getPrice() + ' €';
    }

    _onSizeElementChanged(event) {
        this.pizza.size = this.pizzaSizes[event.target.value];
        this._updatePriceElement();



    }
    _onToppingElementChanged(event) {
        console.log(event.target.checked);
        if (event.target.checked) {
            this.pizza.addTopping(this.toppings[event.target.value]);
        } else {
            this.pizza.removeTopping(this.toppings[event.target.value]);
        }
        this._updatePriceElement()
    }

}
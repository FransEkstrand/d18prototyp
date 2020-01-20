class Stove {
    constructor() {
        this.heat = 0;
        this.element = document.createElement('div');
        this.element.classList.add('stove');
        this.element.addEventListener('click', this.onElementClicked.bind(this))
        this.isActive = false;

    }
    higherThenNine() {
        this.element.innerText = "p";
    }

    lowerThenZero() {
        this.element.innerText = 0;
    }

    decreaseHeat() {
        this.heat--;
        if (this.heat <= 0) {
            this.heat = 0;
        }
        this.element.innerText = this.heat;

    }
    increaseHeat() {
        this.heat++;
        if (this.heat >= 9) {
            this.heat = 10;
        }
        this.element.innerText = this.heat == 10 ? 'P' : this.heat;
    }
    activate() {
        this.element.classList.add('active')
        this.isActive = true;
    }
    deactivate() {
        this.element.classList.remove('active')
        this.isActive = false;
    }
    onElementClicked() {
        if (this.isActive) {
            this.deactivate();
        } else {
            this.activate();
        }
    }



}
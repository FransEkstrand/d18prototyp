class Cell {
    constructor(character) {
        this.character = character;
        this.element = document.createElement('div');
        this.element.classList.add('cell')
    }

    setPosition(row, column, size) {
        this.element.style.top = (row * size) + 'px';
        this.element.style.left = (column * size) + 'px';
        this.element.style.width = size + 'px';
        this.element.style.height = size + 'px';
    }
}
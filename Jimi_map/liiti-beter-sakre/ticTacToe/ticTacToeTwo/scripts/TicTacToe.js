class TicTacToe {


    constructor(gridSize) {
        this.element = document.createElement('div');
        this.element.classList.add('tic-tac-toe-view')

        this.gridSize = gridSize;
        this.grid = this._createGrid(gridSize);


    }
    _createGrid(gridSize) {
        const grid = [];
        for (let row = 0; row < gridSize; row++) {
            grid.push([]);
            for (let column = 0; column < gridSize; column++) {
                grid[row].push(new Cell());
                this.element.appendChild(grid[row][column].element);
                grid[row][column].setPosition(row, column, 100);
            }
        }
        return grid;
    }
}
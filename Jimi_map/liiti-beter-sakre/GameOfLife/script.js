let wrapper = document.getElementById('wrapper');


let rows = 15;
let columns = 34;
let cells = [];

function grid() {






    for (let y = 0; y < rows; y++) {


        for (let x = 0; x < columns; x++) {

            cells[y] = [];
            cells[y][x] = document.createElement('div');
            wrapper.appendChild(cells[y][x]);
            cells[y][x].classList.add('cell');
            cells[y][x].style.top = (40 * y + 90) + "px";
            cells[y][x].style.left = (40 * x + 2) + "px";
        }


    }


}

grid()
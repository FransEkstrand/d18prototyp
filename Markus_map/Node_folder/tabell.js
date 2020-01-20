let wrapper = document.getElementById('wrapper');
let tableStart = '<table>';
let tableStop = '</table>';
let trStart = '<tr>';
let trStop = '</tr>';
let tdStart = '<td>';
let tdStop = '</td>';



function tabell(rows, columns) {
    let html = tableStart;

    for (let i = 1; i <= rows; i++) {
        let svar = "";
        svar += trStart

        for (let j = 1; j <= columns; j++) {
            svar += `${tdStart}${i*j}${tdStop}`;
        }
        svar += trStop
        html += svar
        console.log(svar);
    }
    html += tableStop;

    return wrapper.innerHTML += html;
}

console.log(tabell(45, 58));
let i = 1
let addRemove = true;
console.log("*".repeat(i));

function run(minVal, maxVal) {

    if (i == minVal) {
        addRemove = true;
    } else if (i == maxVal)
        addRemove = false;

    if (addRemove == true)
        i++
    else
        i--

    console.log("*".repeat(i));
}
setInterval(run.bind(null, 1, 20), 100)
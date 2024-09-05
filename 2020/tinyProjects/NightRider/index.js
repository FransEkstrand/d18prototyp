setInterval(changeCase, 100);

let light = "ooooooooooo";
let i = 0;
let plusOrMinus = true;

function changeCase() {

    let array = light.split("")

    if (plusOrMinus == true) {
        if (i >= 10) {
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
            plusOrMinus = false;
            i--
            let result = array.join("");
            console.clear();
            console.log(result);
        } else {
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
            i++
            let result = array.join("");
            console.clear();
            console.log(result);

        }
    } else if (plusOrMinus == false) {
        if (i <= 0) {
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
            plusOrMinus = true;
            i++
            let result = array.join("");
            console.clear();
            console.log(result);
        } else {
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
            i--
            let result = array.join("");
            console.clear();
            console.log(result);
        }
    }
}

setInterval(changeCase, 100);


let light = "ooooooooooo";

let i = 0;
let plusOrMinus = true;

function changeCase() {

    let array = light.split("")


    if (plusOrMinus == true) {
        if (i >= array.length) {

            i--
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
            plusOrMinus = false;
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
        if (i == 0) {
            plusOrMinus = true;
            i++
            light = "ooooooooooo";
            array[i] = array[i].toUpperCase();
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
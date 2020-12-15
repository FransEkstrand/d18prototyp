setInterval(bruh, 500)

let currentNum = 0;



function bruh() {

    let arr = ["o", "o", "o", "o", "o", "o", "o", "o",]
    if (currentNum == arr.length - 1) {
        currentNum = 0
    } else {
        currentNum++
    }

    arr.splice(currentNum, 1, "x")
    console.clear()

    console.log(arr[0], arr[1], arr[2]);
    console.log(arr[7], "O", arr[3]);
    console.log(arr[6], arr[5], arr[4]);

}
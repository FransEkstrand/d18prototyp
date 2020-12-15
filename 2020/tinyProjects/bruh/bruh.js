//Fix the code debugging exercises
//1.
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//2.
function addIfEven(num) {
    if (num % 2 == 0) {
        //3.
        function loopToFive() {
            for (let i = 1; i <= 5; i++) {
                console.log(i);
            }
        }
    }
}
addIfEven(2)
//4.
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log("stringy " + displayEvenNumbers()); // should return [2,4,6,8]


// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.


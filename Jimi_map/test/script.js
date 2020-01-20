/**
 * Min FizzBuzz Function
 * @param {string} hello 
 * @param {string} world 
 * @param {number} count 
 */
function fizzbuzz(hello, world, count) {

    if (typeof hello == 'string' && typeof world == 'string' && typeof count == 'number') {

        for (let i = 1; i <= count; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
                console.log(hello + ' ' + world);
            } else if (i % 5 == 0) {
                console.log(world);
            } else if (i % 3 == 0) {
                console.log(hello);
            } else {
                console.log(i);
            }
        }
    } else {
        throw 'Error has been found in your calling for "fizzbuzz"';
    }
}




fizzbuzz('haha', 'stinky', 100)






































/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizz' + 'buzz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}

let i = 1;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizz' + 'buzz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
    i++
}
*/
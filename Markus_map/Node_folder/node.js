let person = {
    firstname: "Frans",
    lastName: "Ekstrand",
    age: 17,
    shoeSize: 43
}
let arr = []
let namn = "5"
let num = 5

console.log(typeof arr);


if (namn === num) {
    console.log("lika");
} else {
    console.log("olika");
}
console.log(typeof person);


let firstNames = ['Frans', 'Roland', 'Kalle'];
let lastNames = ['Ekstrand', 'Reagan'];

for (let i = 0; i < firstNames.length; i++) {
    console.log(`${firstNames[i]}, ${lastNames[i]}`);
}
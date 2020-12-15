let person1 = {
    firstname: "Markus",
    lastname: "Sällinen",
    age: 44,
    shoesize: 41,
    cars: ['Volvo', 'VW']
}
let person2 = {
    firstname: "Lucky",
    lastname: "Luke",
    age: 44,
    shoesize: 41,
    cars: ['Volvo', 'VW']
}
let person3 = {
    firstname: "Fred",
    lastname: "Flinta",
    age: 44,
    shoesize: 41,
    cars: ['Volvo', 'VW']
}
let person4 = {
    firstname: "Conan",
    lastname: "Barbarian",
    age: 44,
    shoesize: 41,
    cars: ['Volvo', 'VW']
}

let persons = [];


persons.push(person1, person2, person3, person4)

console.log(persons.length);
var namn = "firstname";

for (let i = 0; i < persons.length; i++) {
    let svar = "";
    svar = `${persons[i].firstname} ${persons[i].lastname}${persons[i].age} ${persons[i].shoesize} `;
    // console.log(`${persons[i].firstname} ${persons[i].lastname}${persons[i].age} ${persons[i].shoesize}`);
    for (let j = 0; j < persons[i].cars.length; j++) {
        // console.log(`${persons[i].cars[j]}`)
        svar += `${persons[i].cars[j]}`;
    }
    console.log(svar);

    // console.log(`${persons[i][namn]}`);

}
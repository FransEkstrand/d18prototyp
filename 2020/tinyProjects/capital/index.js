// string to capital letters

let name = "johannes";
let name2 = "johanas";
let name3 = "JOHANNES";
let name4 = "JOHAN";


//reverse capital
name = "johannes";
console.log(name.toUpperCase());
name3 = "JOHANNES";
console.log(name3.toLowerCase());


//First and Last Capital
name = "johannes";
let splitted = name.split("");
splitted[0] = splitted[0].toUpperCase();
splitted[splitted.length - 1] = splitted[splitted.length - 1].toUpperCase();
let result = splitted.join("");
console.log(result);


//every other letter is capital
name = "johannes";
splitted = name.split("");
for (let i = 0; i < splitted.length; i++) {
    if (i % 2 == 0) {
        splitted[i] = splitted[i].toUpperCase();
    }
};
result = splitted.join("");
console.log(result);

//middle letters capital
name = "johannes";
name2 = "johanas";
splitted = name.split("");
if (splitted.length % 2 == 1) {
    splitted[splitted.length / 2 - 0.5] = splitted[splitted.length / 2 - 0.5].toUpperCase();
    result = splitted.join("")
    console.log(result);
} else {

    splitted[Math.floor(splitted.length / 2 - 0.5)] = splitted[Math.floor(splitted.length / 2 - 0.5)].toUpperCase()
    splitted[Math.ceil(splitted.length / 2 - 0.5)] = splitted[Math.ceil(splitted.length / 2 - 0.5)].toUpperCase()
    result = splitted.join("")
    console.log(result);
}

// reverse string
name = "johannes";
splitted = name.split("");
splitted = splitted.reverse("");
result = splitted.join("")
console.log(result);